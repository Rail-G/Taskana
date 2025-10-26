import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()
export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')
    const [create, setCreate] = useState(false)
    const changeTheme = () => {
        setTheme(prev => prev == 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    const createToggle = () => setCreate(!create)
    return (
        <ThemeContext.Provider value={{theme, changeTheme, createToggle, create}}>
            {children}
        </ThemeContext.Provider>
    )
}