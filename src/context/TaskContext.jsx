import { createContext, useContext, useEffect, useState } from "react";
import { DropDownContext } from "./DropDownContext";
import { sortItems } from "../utils/sortItems";

export const TaskContext = createContext()
export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState([])
    const [editType, setEditType] = useState({type: 'create', task: null})
    const onClickChangeType = (type, task = null) => setEditType({type: type, task: task}) 
    const { dropDown } = useContext(DropDownContext)
    const [create, setCreate] = useState(false)
    const createToggle = (optional = false) => setCreate(optional ? optional : !create)
    useEffect(() => {
        const test = sortItems([...tasks], dropDown.sortBy, dropDown.orderBy)
        setTasks(test)
    }, [dropDown.sortBy, dropDown.orderBy])
    return (
        <TaskContext.Provider value={{tasks, setTasks, editType, onClickChangeType, createToggle, create}}>
            {children}
        </TaskContext.Provider>
    )
}