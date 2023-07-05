import React from 'react';
import { useState } from 'react';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import CounterText from './CounterText';

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
            <CounterText count={count}></CounterText>
            <IncrementButton onClick={increment}></IncrementButton>
            <DecrementButton onClick={decrement}></DecrementButton>
        </div>
    );
}

export default Counter;