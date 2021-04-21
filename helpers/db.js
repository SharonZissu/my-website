import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.im1am.mongodb.net/<dbname>?authSource=admin&replicaSet=atlas-5tp3w9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = db.collection(collection).find(filter).sort(sort).toArray();
  return documents;
}
