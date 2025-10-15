import { useContext } from 'react'
import Illustration from '../../illustration/Illustration'
import styles from './emptyContainer.module.css'
import { ThemeContext } from '../../../context/AppContext'
export default function EmptyContainer() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={styles.block}>
            <div className={`${styles.empty} ${!theme && styles.dark}`}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>Все твои задачи организованы как надо</h2>
                    <span className={styles.span}>Отличная работа! Ты большой молодец!</span>
                </div>
                <Illustration name={'task'} icon={styles.icon} woman={styles.iconWoman} border={styles.iconBorder} />
            </div>
        </div>
    )
}