import Icon from '../icon/Icon'
import styles from './task.module.css'

export default function Task({task}) {
    return (
        <div tabIndex={0} className={styles.block}>
            <div className={styles.iconBlock}>
                <input type="checkbox" className={styles.checkbox} id={task.id} name='checkbox' data-priority={task.priority}/>
                <label className={styles.label} htmlFor={task.id}></label>
            </div>
            <p className={styles.text}>{task.title}</p>
        </div>
    )
}