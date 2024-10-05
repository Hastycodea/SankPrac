import React, { useState } from 'react';

function ToDo() {

    const [tasks, setTasks] = useState([]);

    function handleAddTask() {
        const newTask = document.getElementById('new-task').value;

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
        }

        document.getElementById('new-task').value = '';
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((_, i) => i !== id ));
    }

    function moveUpTask(id) {
        if(id > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[id], updatedTasks[id - 1]] = [updatedTasks[id - 1], [updatedTasks[id]]];
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(id) {
        if(id < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[id], updatedTasks[id + 1]] = [updatedTasks[id + 1], [updatedTasks[id]]];
            setTasks(updatedTasks);
        }
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
                    <button className='delete' onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className='position' onClick={() => moveUpTask(index)}>up</button>
                    <button className='position' onClick={() => moveDownTask(index)}>down</button>
                </div>

                
            </div>)}
            

            
        </div>
    );
}

export default ToDo