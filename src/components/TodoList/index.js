import React from "react";
import TodoListItem from "../../components/TodoListItem";
import TodoForm from "../../forms/TodoForm";
import './styles.css';

const TodoList = ({ todos = [{ text: 'Add styles' }, { text: 'Add create function' }] }) => (
    <div className="todo-list-container">
        <TodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
        {todos.length === 0 && (
            <h3>No Todos added yet</h3>
        )}
    </div>
);

export default TodoList;
