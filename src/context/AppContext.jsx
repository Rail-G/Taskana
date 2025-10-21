import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()
export default function AppContext({children}) {
    const [theme, setTheme] = useState('light')
    const [create, setCreate] = useState(false)
    const [tasks, setTasks] = useState([])
    const changeTheme = () => {
        setTheme(prev => prev == 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    const createToggle = () => setCreate(!create)
    return (
        <ThemeContext value={{theme, changeTheme, createToggle, create, tasks, setTasks}}>
            {children}
        </ThemeContext>
    )
}