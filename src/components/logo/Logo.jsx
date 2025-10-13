import styles from './logo.module.css'

export default function Logo() {
    return (
        <a href="/" className={styles.link}><img src="/logo.png" alt="Taskana Logo" /></a>
        )
}