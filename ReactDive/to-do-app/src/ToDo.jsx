import React, { useState } from 'react';

function ToDo() {

    return (
        <div className='todo'>
            <h2 className='title'>To-Do-List</h2>
            <div className="task-input">
                <input type="text" placeholder='Enter a task' />
                <button>Add</button>
            </div>

            <div className="task-items">
                <p>Walk The Dog</p>

                <div>
                    <button className='delete'>Delete</button>
                    <button className='position'>up</button>
                    <button className='position'>down</button>
                </div>
            </div>
        </div>
    );
}

export default ToDo