import styles from './header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
            <img src="src/assets/logo.png" alt="Taskana Logo" />
            <button className={styles.button}><i class={styles.icon}></i>Создать</button>
        </header>
    )
}