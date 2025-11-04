import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Проект выполнен в рамках стажировки <a href="https://preax.ru/" target='_blank' rel="noopener noreferrer"  className={styles.link}>PREAX</a>
        </footer>
    )
}