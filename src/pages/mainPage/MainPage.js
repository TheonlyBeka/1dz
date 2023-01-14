import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function MainPage() {

    const dispatch = useDispatch()
    const num = useSelector(state => state.num)

    const increment = () => {
        dispatch({
            type: "PLUS"
        })
    }

    const decrement = () => {
        dispatch({
            type: "MINUS"
        })
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default MainPage;