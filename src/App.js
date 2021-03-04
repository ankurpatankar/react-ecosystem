import React from "react";
import { hot } from 'react-hot-loader'; // enables hot reload

const App  = () => (
    <div className="App">
        <h1>This is a React App!!!</h1>
    </div>
);

// enables hot reload
export default hot(module)(App);