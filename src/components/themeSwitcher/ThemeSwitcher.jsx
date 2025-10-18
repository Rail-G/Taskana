import { useContext, useState } from "react";
import Icon from "../icon/Icon";
import styles from './themeSwitcher.module.css'
import { ThemeContext } from "../../context/AppContext";

export default function ThemeSwitcher() {
    const { theme, changeTheme, handleEnter } = useContext(ThemeContext)
    return (
        <button className={styles.button} onClick={changeTheme}>
            <div className={`${styles.block} ${theme && styles.active}`}><Icon name={'sun'} fill={styles.toggle}/></div>
            <div className={`${styles.block} ${!theme && styles.active}`}><Icon name={'moon'} fill={styles.toggle}/></div>
        </button>
    )
}