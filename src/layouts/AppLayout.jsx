import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import IncomingTasks from "../pages/incomingTasks/IncomingTasks";
import styles from './appLayout.module.css'

export default function AppLayout() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <NavBar />
                <IncomingTasks />
                <SideBar />
            </div>
        </>
    )
}