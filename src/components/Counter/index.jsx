import React, { useState } from 'react';
import './Counter.scss';

export default function Counter() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="content__counter">
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} >Increment</button>
            <button onClick={() => setCounter(counter - 1)} >Decrement</button>
        </div>
    )
}
