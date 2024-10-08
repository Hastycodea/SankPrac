
import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Kunta Kinte');
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const decrementAge = () => {
        if (age > 0) {
            setAge(age - 1);
        }
    }

    const toggleStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <button onClick={decrementAge}>Decrement Age</button>

            <p>Is Employed: {isEmployed ? 'yes' : 'no'}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent