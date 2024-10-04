import React, { useState } from 'react';

function ToDo() {

    const [tasks, setTasks] = useState([]);

    function handleAddTask() {
        const newTask = document.getElementById('new-task').value;

        setTasks(t => [...t, newTask]);

        document.getElementById('new-task').value = '';
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((_, i) => i !== id ));
    }

    return (
        <div className='todo'>
            <h2 className='title'>To-Do-List</h2>
            <div className="task-input">
                <input type="text" placeholder='Enter a task' id='new-task' />
                <button onClick={handleAddTask}>Add</button>
            </div>

            {tasks.map((task, index) => <div className="task-items">
                <p>{task}</p>

                <div>
                    <button className='delete' key={index} onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className='position'>up</button>
                    <button className='position'>down</button>
                </div>

                
            </div>)}
            

            
        </div>
    );
}

export default ToDo