import { useContext, useEffect, useRef, useState } from 'react'
import styles from './taskEditor.module.css'
import createId from '../../utils/createId'
import TaskInput from '../taskInput/TaskInput'
import PrioritySelector from '../prioritySelector/PrioritySelector'
import { TaskContext } from '../../context/TaskContext'
import Icon from '../icon/Icon'
import { sortItems } from '../../utils/sortItems'
import { DropDownContext } from '../../context/DropDownContext'

export default function TaskEditor() {
    const { setTasks, editType, create, createToggle } = useContext(TaskContext)
    const { dropDown } = useContext(DropDownContext)
    const [task, setTask] = useState('')
    const [selectedBtn, setSelectedBtn] = useState('1')
    const inputRef = useRef(null)
    const onChangeBtn = (id) => setSelectedBtn(id)
    const onChange = (event) => {
        const value = event.target.value.trim()
        if (value) {
            setTask(event.target.value)
        } else {
            setTask('')
        }
    }
    const cancelBtn = () => {
        createToggle()
        setTask('')
        setSelectedBtn('1')
    }

    const onSubmitCreate = (e) => {
        e.preventDefault()
        setTasks(prev => {
            const newTasks = [{ id: createId(), title: task, priority: Number(selectedBtn), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...prev]
            return sortItems(newTasks, dropDown.sortBy, dropDown.orderBy)
        })
        cancelBtn()
    }

    const onSubmitEdit = (e) => {
        e.preventDefault()
        setTasks(prev => {
            const updatedTasks = prev.map(item => {
                return item.id == editType.task.id ? { id: editType.task.id, title: task, priority: Number(selectedBtn), createdAt: editType.task.createdAt, updatedAt: new Date().toISOString()} : item
            })
            return sortItems(updatedTasks, dropDown.sortBy, dropDown.orderBy)
        })
        cancelBtn()
    }

    const onClickToDelete = () => {
        setTasks(prev => {
            return prev.filter(item => item.id !== editType.task.id)
        })
        cancelBtn()
    }

    useEffect(() => {
        if (create) {
            const timer = setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [create])

    useEffect(() => {
        if (editType.type == 'create') {
            setTask('')
            setSelectedBtn('1')
        } else if (editType.type == 'edit') {
            setTask(editType.task.title)
            setSelectedBtn(String(editType.task.priority))
            inputRef.current.focus();
        }
    }, [editType.type, editType.task])
    return (
        <div className={`${styles.block} ${create && styles.active}`}>
            <form className={styles.formBlock} onSubmit={editType.type == 'edit' ? onSubmitEdit : onSubmitCreate} noValidate>
                <div className={styles.headBlock}>
                    <h1 className={styles.header}>Создание задачи</h1>
                    <TaskInput task={task} onChange={onChange} inputRef={inputRef} setTask={setTask} />
                </div>
                <div className={styles.flexBlock}>
                    <PrioritySelector selectedBtn={selectedBtn} onChangeBtn={onChangeBtn} />
                </div>
                <div className={styles.submitBlock}>
                    <button type='submit' className={`${styles.submitBtn} ${styles.createBtn}`} disabled={(editType.task.title == task && editType.task.priority == selectedBtn) ? task : !task}>Создать</button>
                    <button type='button' className={styles.submitBtn} onClick={cancelBtn}>Отмена</button>
                    {editType.type == 'edit' && <button type='button' className={styles.trashBtn} onClick={onClickToDelete}><Icon name="trash" /></button>}
                </div>
            </form>
        </div>
    )
}