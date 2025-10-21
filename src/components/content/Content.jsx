import { useContext } from 'react'
import styles from './content.module.css'
import { ThemeContext } from '../../context/AppContext'

export default function Content({children}) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
} 