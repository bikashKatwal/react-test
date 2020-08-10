import React, {useState} from 'react';

function Clicker(props) {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 0) setCount(count - 1);
        // setTimeout(() => {
        //     setCount(count - 1);
        // }, 250);
    }

    return (
        <div>
            <span data-testid="count">{count}</span>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default Clicker;