import { useState } from 'react'
import Icon from '../icon/Icon'
import styles from './button.module.css'
export default function Button() {
    const [click, setClick] = useState(false)
    const onClick = () => setClick(!click)
    return (
        <button className={`${styles.button} ${click && styles.loading}`} onClick={onClick}>
            {click 
            ? <div className={styles.btnLoading}>
                <Icon name={'loading'} className={styles.iconLoading} />
            </div>
            : <><div className={styles.iconBody}><Icon name={'addTask'} className={styles.icon} /></div>
            Создать</>}
        </button>
    )
}