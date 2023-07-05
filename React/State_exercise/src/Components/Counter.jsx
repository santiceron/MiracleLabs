import React from 'react';
import { useState } from 'react';

function Counter() {
    
    const [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1);
    }

    let decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Cuenta: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
}

export default Counter;