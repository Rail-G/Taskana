import { useContext } from "react";
import Content from "../content/Content";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'
import { TaskContext } from "../../context/TaskContext";
import Dropdown from "../dropdown/Dropdown";

export default function MainContainer() {
    const {tasks} = useContext(TaskContext)
    return (
        <Content>
            <div className={styles.header}>
                <h1 className={styles.h1}>Входящие</h1>
                <Dropdown />
            </div>
            <div className={styles.board}>
                {tasks.length > 0
                    ? <TaskList tasks={tasks} />
                    : <EmptyContainer />}
            </div>
        </Content>
    )
}