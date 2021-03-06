import React, { useEffect } from "react";
import { connect } from 'react-redux';
import TodoListItem from "../../components/TodoListItem";
import TodoForm from "../../forms/TodoForm";
// import './styles.css'; // Not needed now with styled components

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

import styled from 'styled-components';

// BigRedText and BigGreenText are what are called as styled components
const Heading = styled.h3`
    font-size: 32px;
`;
const RedHeading = styled(Heading)`
    color: #FF0000;
`;
const GreenHeading = styled(Heading)`
    color: #00FF00;
`;
const TodoListContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 700px;
    margin: auto;
`;

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
            <TodoListContainer>
                <div>Loading...</div>
            </TodoListContainer>
        );
    }

    return (
        <TodoListContainer
            // className="todo-list-container" // Not needed now with styled components
        >
            <TodoForm />
            <RedHeading>Incomplete TODOs</RedHeading>
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
            <GreenHeading>Completed TODOs</GreenHeading>
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
        </TodoListContainer>
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
