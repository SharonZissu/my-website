//mongodb+srv://admin-sharon:QmuLub4zF8SlN82g@cluster0.im1am.mongodb.net/<dbname>?authSource=admin&replicaSet=atlas-5tp3w9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true

import { connectDatabase, insertDocument } from "../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, message } = req.body;
  console.log(name);
  console.log(email);
  console.log(message);
  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.json({ message: "Invalid inputs" });
    return;
  }
  let client;
  try {
    client = await connectDatabase();
  } catch (err) {
    console.log("#####################################");
    client.close();
    res.json({ message: "Cannot connect to db" });
    return;
  }
  let result;
  try {
    result = await insertDocument(client, "contact", { name, email, message });
  } catch (err) {
    client.close();
    res.json({ message: "Cannot insert document" });
  }
  client.close();
  res.json({ message: "Contact success!" });
}

export default handler;
