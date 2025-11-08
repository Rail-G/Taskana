import Icon from "../icon/Icon";
import styles from "./taskInput.module.css";

export default function TaskInput({task, onChange, inputRef, setTask}) {
  const clearInput = () => setTask("");
  return (
    <div className={styles.inputBlock}>
      <h2 className={styles.text}>
        Название <span className={styles.span}>*</span>
      </h2>
      <div className={styles.inputRow}>
        <input
          type="text"
          className={styles.inputBar}
          ref={inputRef}
          value={task}
          onChange={onChange}
          placeholder="Название задачи"
        />
        {!!task && (
          <button
            type="button"
            className={styles.iconButton}
            onClick={clearInput}
          >
            <Icon name="xmark" />
          </button>
        )}
      </div>
    </div>
  );
}
