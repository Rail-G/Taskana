import Header from "../header/Header";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'

export default function MainContainer() {
    const taskList = []
    return (
        <div className={styles.container}>
            <Header />
                {taskList.length > 0
                ? <TaskList/>
                : <EmptyContainer/>}
        </div>
    )
}