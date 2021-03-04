import React, { useState } from 'react';
import './styles.css';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="todo-form">
            <input
                type="text"
                className="todo-input"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="create-button">Create a Todo</button>
        </div>
    );
};

export default TodoForm;