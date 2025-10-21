import { useContext, useEffect, useRef, useState } from 'react'
import Icon from '../icon/Icon'
import styles from './taskEditor.module.css'
import { ThemeContext } from '../../context/AppContext'
import createId from '../../utils/createId'
import TaskInput from '../taskInput/TaskInput'
import PrioritySelector from '../prioritySelector/PrioritySelector'

export default function TaskEditor() {
    const { create, createToggle, setTasks } = useContext(ThemeContext)
    const [task, setTask] = useState('')
    const [selectedBtn, setSelectedBtn] = useState('1')
    const inputRef = useRef(null)
    const onChangeBtn = (id) => setSelectedBtn(id)
    const onChange = (event) => setTask(event.target.value)
    const cancelBtn = () => {
        createToggle()
        setTask('')
        setSelectedBtn('1')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => [{ id: createId(), title: task, priority: Number(selectedBtn), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...prev])
        cancelBtn()
    }
    useEffect(() => {
        if (create) {
            const timer = setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [create])
    return (
        <div className={`${styles.block} ${create && styles.active}`}>
            <form className={styles.formBlock} onSubmit={onSubmit} noValidate>
                <div className={styles.test}>
                    <h1 className={styles.header}>Создание задачи</h1>
                    <TaskInput task={task} onChange={onChange} inputRef={inputRef} setTask={setTask} />
                </div>
                <div className={styles.flexBlock}>
                    <PrioritySelector selectedBtn={selectedBtn} onChangeBtn={onChangeBtn} />
                </div>
                <div className={styles.submitBlock}>
                    <button type='submit' className={`${styles.submitBtn} ${styles.createBtn}`} disabled={!!!task}>Создать</button>
                    <button type='button' className={styles.submitBtn} onClick={cancelBtn}>Отмена</button>
                </div>
            </form>
        </div>
    )
}