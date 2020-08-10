import React from 'react';
import './App.css';

import Clicker from "./components/clicker/Clicker";
import Fetch from "./components/fetch/Fetch";

function App() {
    return (
        <div className="App">
            <Fetch url={"https://jsonplaceholder.typicode.com/posts"}/>
        </div>
    );
}

export default App;
