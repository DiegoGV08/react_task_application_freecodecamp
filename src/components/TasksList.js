import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/TaskList.css'
import Task from "./Task";


function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const taskUpdated = [task, ...tasks]
            setTasks(taskUpdated);
        }
    }

    const deleteTask =id => {
        const taskUpdated = tasks.filter(task => task.id !== id);
        setTasks(taskUpdated);
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            isCompleted={task.isCompleted}
                            deleteTask={deleteTask} />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;