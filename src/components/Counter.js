import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClickEvent = () => {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1>Counter!</h1>
            <Link to={'/'}>Back</Link>
            <h2>Count: {count}</h2>
            <button onClick={handleClickEvent}>Increment</button>
        </div>
    );
}

export default Counter;