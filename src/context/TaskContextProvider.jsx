// CONTEXT PROVIDER

import { createContext, useState, useEffect } from "react"

import { tasks as data } from '../tasks.js'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(idTask) {
        setTasks(tasks.filter(task => task.id !== idTask))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}
