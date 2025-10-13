// import Header from "../header/Header";
import Content from "../content/Content";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'

export default function MainContainer() {
    const taskList = []
    return (
        <Content>
            <div className={styles.header}>
                <h1 className={styles.h1}>Входящие</h1>
            </div>
            <div className={styles.board}>
                {taskList.length > 0
                    ? <TaskList />
                    : <EmptyContainer />}
            </div>
        </Content>
    )
}