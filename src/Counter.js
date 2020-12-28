import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState');
    if(storage) return JSON.parse(storage).counter
    return {counter : 0};
}

const setStateInLocalStorage = (counter) => {
    localStorage.setItem('counterState', JSON.stringify({counter}))
}

const Counter = ( { max, step } ) => {
    
    const [counter, setCount] = useState(getStateFromLocalStorage());

    const increment = () => { 
        setCount( counter => {
            if(counter >= max) return counter;
            return counter + step;
        }) 
    };

    useEffect(() => {
        document.title = `Counter: ${counter}`
        setStateInLocalStorage(counter)
    }, [counter])

    const decrement = () => { setCount( counter - 1) };
    const reset = () => { setCount( 0 ) };
 
    return (
        <div className="counter">
            <h2>{ counter }</h2>
            <button onClick = { increment }>Increment</button>
            <button onClick = { decrement }>Decrement</button>
            <button onClick = { reset }>Reset</button>
        </div>
    );
}
 
export default Counter;