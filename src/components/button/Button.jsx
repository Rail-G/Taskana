import {useContext} from "react";
import Icon from "../icon/Icon";
import styles from "./button.module.css";
import {TaskContext} from "../../context/TaskContext";
export default function Button() {
  const {createToggle, onClickChangeType} = useContext(TaskContext);
  return (
    <button
      className={styles.button}
      onClick={() => {
        createToggle(true);
        onClickChangeType("create");
      }}
    >
      <div className={styles.iconBody}>
        <Icon
          name={"addTask"}
          className={styles.icon}
        />
      </div>
      Создать
    </button>
  );
}
