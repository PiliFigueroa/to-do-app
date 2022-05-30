import React from 'react';
import './ContainerTasks.css'
import { Task } from './Task'

const ContainerTasks = ({ tasks, setTasks }) => {
    return(
        <div className='container-tasks'>
            {tasks.map(task => <Task key={task.id} id={task.id} tasks={tasks} name={task.task} isCompleted={task.isCompleted} setTasks={setTasks} />)}
        </div>
    )
}

export { ContainerTasks }