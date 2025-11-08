import Icon from "../icon/Icon";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <a
      href="/"
      className={styles.link}
    >
      <Icon name={"logo"} />
    </a>
  );
}
