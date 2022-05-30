import React from 'react';
import './Task.css'

const Task = ({ id, name, isCompleted, tasks, setTasks }) => {

    const completeTask = () => {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, isCompleted: true}
            } else {
                return task
            }
        }))
    }

    const deleteTask = () => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return(
        <div className={`task ${isCompleted ? "completed" : "not-completed"}`}>
            <p>{name}</p>
            {!isCompleted 
            ? 
                <button onClick={completeTask}>Completar</button>
            :
                <button onClick={deleteTask}>Eliminar</button>
            }
        </div>
    )
}

export { Task }