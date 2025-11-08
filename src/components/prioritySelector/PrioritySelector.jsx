import PriorityButton from "../priorityButton/PriorityButton";
import styles from "./prioritySelector.module.css";

export default function PrioritySelector({selectedBtn, onChangeBtn}) {
  return (
    <div className={styles.priorityBlock}>
      <h2 className={styles.text}>Приоритет</h2>
      <ul className={styles.btnList}>
        <li value="1">
          <PriorityButton
            priority="1"
            iconName="minus"
            selectedBtn={selectedBtn}
            onChange={onChangeBtn}
          />
        </li>
        <li value="2">
          <PriorityButton
            priority="2"
            iconName="chevronTop"
            selectedBtn={selectedBtn}
            onChange={onChangeBtn}
          />
        </li>
        <li value="3">
          <PriorityButton
            priority="3"
            iconName="arrowTwo"
            selectedBtn={selectedBtn}
            onChange={onChangeBtn}
          />
        </li>
      </ul>
    </div>
  );
}
