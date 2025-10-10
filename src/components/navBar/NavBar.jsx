import styles from './navBar.module.css'
export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <a href='#' className={styles.button}><i className={styles.icon}></i>Входящие</a>
        </nav>
    )
}