import Button from '../button/Button'
import Logo from '../logo/Logo'
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher'
import styles from './header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.block}>
                <Button />
                <ThemeSwitcher />
            </div>
        </header>
    )
}