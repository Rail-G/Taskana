import { createContext, useEffect, useState } from "react";


export const DropDownContext = createContext()
export default function DropDownProvider({children}) {
    const [dropDown, setDropDown] = useState({sortBy: 'create', orderBy: 'asc'})
    return (
        <DropDownContext.Provider value={{dropDown, setDropDown}}>
            {children}
        </DropDownContext.Provider>
    )
}