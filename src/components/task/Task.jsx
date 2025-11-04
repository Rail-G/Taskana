import { useContext } from 'react'
import Icon from '../icon/Icon'
import styles from './task.module.css'
import { TaskContext } from '../../context/TaskContext'

export default function Task({task}) {
    const { editType, onClickChangeType, createToggle, create } = useContext(TaskContext)
    return (
        <div tabIndex={0} className={`${styles.block} ${(editType.task?.id === task.id && create) && styles.active}`}>
            <div className={styles.iconBlock}>
                <input type="checkbox" className={styles.checkbox} id={task.id} name='checkbox' data-priority={task.priority}/>
                <label className={styles.label} htmlFor={task.id}></label>
            </div>
            <p className={styles.text}>{task.title}</p>
            <button className={`${styles.editButton} ${(editType.task?.id === task.id && create) && styles.activeEdit}`} onClick={() => {onClickChangeType('edit', task); createToggle(true)}}>
                <Icon name="edit" />
            </button>
        </div>
    )
}