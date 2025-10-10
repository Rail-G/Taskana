import styles from './button.module.css'
export default function Button() {
    return (
        <button className={styles.button}><i className={styles.icon}></i>Создать</button>
    )
}