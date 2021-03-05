import React from "react";
import './styles.css';

const TodoListItem = ({ todo, onRemovePressed }) => (
    <div className="todo-item-container">
        <div className="todo-item">
            {todo.text}
        </div>
        <div className="buttons-container">
            <button className="completed-button">Mark as Completed</button>
            <button
                className="remove-button"
                onClick={() => onRemovePressed(todo.text)}
            >
                Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;
