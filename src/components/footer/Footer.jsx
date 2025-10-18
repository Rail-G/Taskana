import { useContext } from 'react'
import styles from './footer.module.css'
import { ThemeContext } from '../../context/AppContext'
export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <footer className={`${styles.footer} ${!theme && styles.dark}`}>
            Проект выполнен в рамках стажировки <a href="https://preax.ru/" target='_blank'  className={styles.link}>PREAX</a>
        </footer>
    )
}