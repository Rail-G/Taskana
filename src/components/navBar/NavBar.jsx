import Icon from "../icon/Icon";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <a
        href="#"
        className={styles.button}
      >
        <Icon
          name={"navigate"}
          icon={styles.icon}
        />
        Входящие
      </a>
    </nav>
  );
}
