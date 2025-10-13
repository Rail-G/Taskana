import styles from './emptySideBar.module.css'
export default function EmptySideBar() {
    return (
        <div className={styles.block}>
            <div className={styles.empty}>
                <img src="/notebook.png" alt="" />
                <span className={styles.span}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</span>
            </div>
        </div>
    )
}