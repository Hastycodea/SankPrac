import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');



    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])

    function increment() {
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor( c => c === 'green' ? 'red' : 'green');
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>SUBSTRACT</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent