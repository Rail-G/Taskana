// import Header from "../header/Header";
import { useContext } from "react";
import Content from "../content/Content";
import TaskList from "../taskList/TaskList";
import EmptyContainer from "./emptyContainer/EmptyContainer";
import styles from './mainContainer.module.css'
import { ThemeContext } from "../../context/AppContext";

export default function MainContainer() {
    const { theme } = useContext(ThemeContext)
    const taskList = []
    return (
        <Content>
            <div className={styles.header}>
                <h1 className={`${styles.h1} ${!theme && styles.dark}`}>Входящие</h1>
            </div>
            <div className={styles.board}>
                {taskList.length > 0
                    ? <TaskList />
                    : <EmptyContainer />}
            </div>
        </Content>
    )
}