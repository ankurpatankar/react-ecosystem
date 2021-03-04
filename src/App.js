import React from "react";
import { hot } from 'react-hot-loader'; // enables hot reload
import TodoList from './components/TodoList';

const App  = () => (
    <div className="App">
        <TodoList />
    </div>
);

// enables hot reload
export default hot(module)(App);