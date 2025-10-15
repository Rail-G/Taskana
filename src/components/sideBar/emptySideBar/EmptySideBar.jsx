import { useContext } from 'react'
import { ThemeContext } from '../../../context/AppContext'
import Illustration from '../../illustration/Illustration'
import styles from './emptySideBar.module.css'

export default function EmptySideBar() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={styles.block}>
            <div className={`${styles.empty} ${!theme && styles.dark}`}>
                <Illustration name={'side'} icon={styles.icon} background={styles.iconBackground} border={styles.iconBorder} row={styles.iconRow}/>
                <span className={styles.span}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</span>
            </div>
        </div>
    )
}