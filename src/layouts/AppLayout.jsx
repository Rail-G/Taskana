import Header from "../components/header/Header";
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
import TaskEditor from "../components/taskEditor/TaskEditor";
import IncomingTasks from "../pages/incomingTasks/IncomingTasks";
import styles from './appLayout.module.css'

export default function AppLayout() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <NavBar />
                <IncomingTasks />
                <div className={styles.block}>
                    <SideBar />
                    <TaskEditor />
                </div>
            </div>
        </>
    )
}
