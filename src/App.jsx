import './App.css'
import { useState } from 'react'
import { ContainerForm, ContainerTasks } from "./components"
import { v4 as uuidv4 } from 'uuid'

const App = () => {

  const [tasks, setTasks] = useState([{
    id: uuidv4(),
    task: "Terminar mi app",
    isCompleted: true
  }])

  return (
    <div className="app-container">
      <ContainerForm tasks={tasks} setTasks={setTasks} />
      <ContainerTasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
