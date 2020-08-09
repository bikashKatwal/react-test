import React,{useState} from 'react';
import './App.css';

import Counter from './Counter';
import Button from './components/button/button'

function App() {
  return (
    <div className="App">
      <Button label="Click me"/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
