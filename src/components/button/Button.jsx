import { useContext } from 'react'
import Icon from '../icon/Icon'
import styles from './button.module.css'
import { ThemeContext } from '../../context/ThemeContext'
export default function Button() {
    const {create, createToggle} = useContext(ThemeContext)
    return (
        <button className={styles.button} disabled={create} onClick={createToggle}>
            <div className={styles.iconBody}><Icon name={'addTask'} className={styles.icon} /></div>
            Создать
        </button>
    )
}