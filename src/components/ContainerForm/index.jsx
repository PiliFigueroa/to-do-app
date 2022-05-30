import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import "./Input.css"

const ContainerForm = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const handleClick = () => {
        setTasks([...tasks, {
            id: uuidv4(),
            task: input,
            isCompleted: false
        }])
        setInput("")
    }

    return(
        <>
            <input type="text" name="task" value={input} className="input-text" onChange={(e) => setInput(e.target.value)} />
            <button className="btn-submit" text="Agregar" onClick={handleClick}>Agregar</button>
        </>
    )
}

export { ContainerForm }