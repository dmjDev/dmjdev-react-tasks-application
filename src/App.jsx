import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

function App() {
  const html =
    <main className="bg-black h-screen">
      <div className="container mx-auto p-3">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  return html
}

export default App
