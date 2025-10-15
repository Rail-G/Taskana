import { useContext, useState } from "react";
import Icon from "../icon/Icon";
import styles from './themeSwitcher.module.css'
import { ThemeContext } from "../../context/AppContext";

export default function ThemeSwitcher() {
    const { theme, changeTheme, handleEnter } = useContext(ThemeContext)
    return (
        <div className={styles.block} onKeyDown={handleEnter} tabIndex={0}>
            <button tabIndex={-1} className={`${styles.button} ${theme && styles.active}`} onClick={changeTheme} disabled={!theme}><Icon name={'sun'} fill={styles.toggle}/></button>
            <button tabIndex={-1} className={`${styles.button} ${!theme && styles.active}`} onClick={changeTheme}  disabled={theme}><Icon name={'moon'} fill={styles.toggle}/></button>
        </div>
    )
}