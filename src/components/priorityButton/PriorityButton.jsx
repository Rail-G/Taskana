import Icon from "../icon/Icon";
import styles from "./priorityButton.module.css";

export default function PriorityButton({
  priority,
  iconName,
  selectedBtn,
  onChange,
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${selectedBtn === priority ? styles.btnActive : ""}`}
      onClick={() => onChange(priority)}
    >
      <Icon name={iconName} />
    </button>
  );
}
