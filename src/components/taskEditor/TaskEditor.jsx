import { useContext, useEffect, useRef, useState } from 'react'
import Icon from '../icon/Icon'
import styles from './taskEditor.module.css'
import { ThemeContext } from '../../context/AppContext'
import createId from '../../utils/createId'

export default function TaskEditor() {
    const {create, createToggle, setTasks} = useContext(ThemeContext)
    const [task, setTask] = useState('')
    const [selectedBtn, setSelectedBtn] = useState('1')
    const inputRef = useRef(null)
    const onChangeBtn = (id) => setSelectedBtn(id)
    const onChange = (event) => setTask(event.target.value)
    const clearInput = () => setTask('')
    const cancelBtn = () => {
        createToggle()
        setTask('')
        setSelectedBtn('1')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => [{id: createId(), title: task, priority: Number(selectedBtn), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}, ...prev])
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
                    <div className={styles.inputBlock}>
                        <h2 className={styles.text}>Название <span className={styles.span}>*</span></h2>
                        <div className={styles.inputRow}>
                            <input type="text" className={styles.inputBar} ref={inputRef} value={task} onChange={onChange} placeholder='Новые задачи' />
                            {!!task && <button className={styles.iconButton} onClick={clearInput}>
                                <Icon name='xmark' />
                            </button>}
                        </div>
                    </div>
                </div>
                <div className={styles.flexBlock}>
                    <div className={styles.priorityBlock}>
                        <h2 className={styles.text}>Приоритет</h2>
                        <ul className={styles.btnList}>
                            <li value='1'>
                                <button type='button' className={`${styles.button} ${selectedBtn == '1' ? styles.btnActive : ''}`} onClick={() => onChangeBtn('1')}><Icon name={'minus'} /></button>
                            </li>
                            <li value='2'>
                                <button type='button' className={`${styles.button} ${selectedBtn == '2' ? styles.btnActive : ''}`} onClick={() => onChangeBtn('2')}><Icon name={'chevronTop'} /></button>
                            </li>
                            <li value='3'>
                                <button type='button' className={`${styles.button} ${selectedBtn == '3' ? styles.btnActive : ''}`} onClick={() => onChangeBtn('3')}><Icon name={'arrowTwo'} /></button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.submitBlock}>
                    <button type='submit' className={`${styles.submitBtn} ${styles.createBtn}`} disabled={!!!task}>Создать</button>
                    <button type='button' className={styles.submitBtn} onClick={cancelBtn}>Отмена</button>
                </div>
            </form>
        </div>
    )
}