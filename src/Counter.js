import React,{useState} from 'react';

const Counter = () => {
  const [counter, setCounter]=useState(0);

  const decrement=()=>{
      if(counter>0) setCounter(counter-1);
  };

    return (
        <div>
            <h1>This is a counter app </h1>
            <div id='counter-value'>{counter}</div>
            <button id="increment-btn" onClick={()=>setCounter(counter+1)}>Increment</button>
            <button id="decrement-btn" onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;