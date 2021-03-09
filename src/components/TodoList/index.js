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

import {
    // getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from "../../components/selectors";

const TodoList = ({
    // todos = [],
    onRemovePressed,
    onCompletedPressed,
    isLoading,
    startLoadingTodos,
    completedTodos,
    incompleteTodos,
}) => {
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
            <h3>Incomplete TODOs</h3>
            {incompleteTodos.map(
                todo => (
                    <TodoListItem
                        todo={todo}
                        key={todo.text.replace(/ /g, '-')}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />
                )
            )}
            <h3>Completed TODOs</h3>
            {completedTodos.map(
                todo => (
                    <TodoListItem
                        todo={todo}
                        key={todo.text.replace(/ /g, '-')}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />
                )
            )}
            {incompleteTodos.length === 0 && completedTodos.length === 0 && (
                <h3>No Todos added yet</h3>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    // todos: getTodos(state),
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
