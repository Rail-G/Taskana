import Statistic from '../statistic/Statistic'
import EmptySideBar from './emptySideBar/EmptySideBar'
import styles from './sideBar.module.css'
export default function SideBar() {
    const statisticList = []
    return (
        <aside className={styles.sideBar}>
            {statisticList.length > 0
                ? <Statistic />
                : <EmptySideBar/>}
        </aside>
    )
}