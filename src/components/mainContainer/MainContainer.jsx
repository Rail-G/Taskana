import { useContext } from "react";
import Content from "../content/Content";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'
import { ThemeContext } from "../../context/AppContext";

export default function MainContainer() {
    const {tasks} = useContext(ThemeContext)
    return (
        <Content>
            <div className={styles.header}>
                <h1 className={styles.h1}>Входящие</h1>
            </div>
            <div className={styles.board}>
                {tasks.length > 0
                    ? <TaskList tasks={tasks} />
                    : <EmptyContainer />}
            </div>
        </Content>
    )
}