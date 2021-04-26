import classes from "./border.module.css";

function Border() {
  return (
    <hr className={`${classes.divider} ${classes.line} ${classes.glow}`} />
  );
}
export default Border;
