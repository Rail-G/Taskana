import { createContext, useState } from "react";


export const ThemeContext = createContext()
export default function AppContext({children}) {
    const [theme, setTheme] = useState(true)
    const changeTheme = () => setTheme(!theme)
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            changeTheme()
        }
    }
    return (
        <ThemeContext value={{theme, changeTheme, handleEnter}}>
            {children}
        </ThemeContext>
    )
}