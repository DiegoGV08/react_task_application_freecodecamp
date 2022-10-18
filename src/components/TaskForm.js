import React, {useState} from "react";
import '../style-sheets/TaskForm.css'

function TaskForm(props) {

const [input, setInput] = useState('');

const handleChange = e =>{
setInput(e.target.value);
    console.log(e.target.value);
}

const handleSend = e => {
    const newTask = {
        id: '34354',
        text: 'Hi'
    }
}

    return (
        <form className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='Task'
                name="text"
                onChange={handleChange}
            />
            <button
                className="task-button">
                Add Task
            </button>
        </form>
    )
}

export default TaskForm;