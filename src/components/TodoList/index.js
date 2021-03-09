import React, { useEffect } from "react";
import { connect } from 'react-redux';
import TodoListItem from "../../components/TodoListItem";
import TodoForm from "../../forms/TodoForm";
import './styles.css';

import {
    displayAlert,
    loadTodos,
    removeTodoRequest,
    markTodoAsCompletedRequest,
} from '../../store/thunks';

import { getTodos, getTodosLoading } from "../../components/selectors";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="todo-list-container">
            <TodoForm />
            {todos.map(
                todo => (
                    <TodoListItem
                        todo={todo}
                        key={todo.text.replace(/ /g, '-')}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />
                )
            )}
            {todos.length === 0 && (
                <h3>No Todos added yet</h3>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
