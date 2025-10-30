import Task from '../task/Task'
import styles from './taskList.module.css'

export default function TaskList({tasks}) {
    return (
        <ul className={styles.taskList}>
            {tasks.map(task => {
                return (
                    <li>
                        <Task task={task} />
                    </li>
                )
            })}
        </ul>
    )
}