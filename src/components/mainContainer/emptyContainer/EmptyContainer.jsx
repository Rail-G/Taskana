import styles from './emptyContainer.module.css'
export default function EmptyContainer() {
    return (
        <div className={styles.block}>
            <div className={styles.empty}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>Все твои задачи организованы как надо</h2>
                    <span className={styles.span}>Отличная работа! Ты большой молодец!</span>
                </div>
                <img className={styles.img} src="/womanYogo.png" alt="Woman Yogo" />
            </div>
        </div>
    )
}