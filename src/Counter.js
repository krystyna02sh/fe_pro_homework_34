// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux'

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h1>Counter</h1>
            <button className='but' onClick={decrement}>-</button>
            <span className='num'>{count}</span>
            <button className='but' onClick={increment}>+</button>
            <div>
                <button className='res' onClick={reset}>Reset</button>
            </div>

        </div>
    );
};


export default Counter;

