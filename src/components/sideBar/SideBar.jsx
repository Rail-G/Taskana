import { useContext } from 'react'
import Statistic from '../statistic/Statistic'
import EmptySideBar from './emptySideBar/EmptySideBar'
import styles from './sideBar.module.css'
import { ThemeContext } from '../../context/AppContext'
export default function SideBar() {
    const {theme} = useContext(ThemeContext)
    const statisticList = []
    return (
        <aside className={`${styles.sideBar} ${!theme && styles.dark}`}>
            {statisticList.length > 0
                ? <Statistic />
                : <EmptySideBar/>}
        </aside>
    )
}