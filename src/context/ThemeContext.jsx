import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()
export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        setTheme(prev => prev == 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}