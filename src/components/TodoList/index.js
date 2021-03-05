import React from "react";
import { connect } from 'react-redux';
import { markTodoCompleted, removeTodo } from '../../store/actions';
import TodoListItem from "../../components/TodoListItem";
import TodoForm from "../../forms/TodoForm";
import './styles.css';

import { displayAlert } from '../../store/thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="todo-list-container">
        <TodoForm />
        {todos.map(
            todo => (
                <TodoListItem
                    todo={todo}
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

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
