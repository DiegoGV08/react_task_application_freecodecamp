import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/TaskList.css'
import Task from "./Task";


function TaskList() {

    const [task, setTask] = useState([]);

    const addTask = task => {
        console.log("Agregar tarea");
        console.log(task);
    }

    return (
        <>
            <TaskForm />
            <div className='task-list-container'>
                {
                    task.map((task) =>
                        <Task
                            text={task.text}
                            isCompleted={task.isCompleted}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;