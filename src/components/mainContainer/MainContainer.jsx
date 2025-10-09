// import Header from "../header/Header";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'

export default function MainContainer() {
    const taskList = []
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.h1}>Входящие</h1>
            </div>
            <div className={styles.test}>
                {taskList.length > 0
                    ? <TaskList />
                    : <EmptyContainer />}
            </div>
        </div>
    )
}