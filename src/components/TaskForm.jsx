import { useContext, useState, useRef } from "react"

import { TaskContext } from "../context/TaskContextProvider";   // CONTEXT PROVIDER

function TaskForm() {
    const inputRef = useRef(null);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)              // CONTEXT PROVIDER

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
        inputRef.current.focus();
    }

    const html =
        <div className="max-w-md mx-auto">
        <form
            className="bg-slate-800 p-5 mb-3 rounded-3xl"
            onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
            <input
                className="bg-slate-300 p-3 w-full mb-2 rounded-sm"
                ref={inputRef}
                placeholder="Tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus />
            <br />
            <textarea
                className="bg-slate-300 p-3 w-full rounded-sm"
                placeholder="Descripción"
                onChange={(e) => setDescription(e.target.value)}
                value={description}>
            </textarea>
            <button className="bg-blue-600 text-amber-100 px-10 py-2 rounded-3xl mt-4 hover:bg-blue-400 w-full hover:cursor-pointer">Guardar</button>
        </form>
        </div>
    return html
}

export default TaskForm