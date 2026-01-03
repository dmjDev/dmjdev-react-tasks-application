import { useContext } from "react"

import { TaskContext } from "../context/TaskContextProvider";                       // CONTEXT PROVIDER

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)                                  // CONTEXT PROVIDER

    return (
        <div className="bg-gray-800 text-white rounded-2xl p-5">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-400 text-sm">{task.description}</p>
            <button
                className="bg-red-500 px-2 py-1 rounded-2xl mt-4 hover:bg-red-400 opacity-50 hover:opacity-100 hover:cursor-pointer"
                onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export default TaskCard