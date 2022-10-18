import React from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/TaskList.css'

function TaskList() {
    return (
        <>
            <TaskForm />
            <div className='task-list-container'>
                LISTA TAREAS
            </div>
        </>
    );
}

export default TaskList;