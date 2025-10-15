import { useContext } from 'react'
import Icon from '../icon/Icon'
import styles from './navBar.module.css'
import { ThemeContext } from '../../context/AppContext'

export default function NavBar() {
    const { theme} = useContext(ThemeContext)
    
    return (
        <nav className={`${styles.navBar} ${!theme && styles.dark}`}>
            <a href='#' className={styles.button}><Icon name={'navigate'} className={styles.icon} />Входящие</a>
        </nav>
    )
}