import { useContext } from "react"

import { TaskContext } from "../context/TaskContextProvider";       // CONTEXT PROVIDER

import TaskCard from "./TaskCard"

function TaskList() {
    const { tasks } = useContext(TaskContext)                       // CONTEXT PROVIDER

    if (tasks.length === 0){
        return <h2 className="text-white text-2xl font-bold text-center">No existe ninguna tarea</h2>
    }

    let divClass = "grid grid-cols-4 gap-2"
    if (tasks.length === 1){
        divClass = "grid grid-cols-1 gap-2"
    }
    if (tasks.length === 2){
        divClass = "grid grid-cols-2 gap-2"
    }
    if (tasks.length === 3){
        divClass = "grid grid-cols-3 gap-2"
    }

    const html =
        <div className={divClass}>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    return html
}

export default TaskList