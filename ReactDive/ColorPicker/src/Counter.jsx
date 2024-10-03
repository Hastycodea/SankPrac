import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function increment(event) {
        // updater functions
        setCount( c => c + 1);
        setCount( c => c + 1);
        setCount( c => c + 1);
    }

    function decrement(event) {
        setCount(count - 1);
    }

    function reset(event) {
        setCount(0);
    }
    
    return(
        <div className='counter'>
            <p>Counter: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter