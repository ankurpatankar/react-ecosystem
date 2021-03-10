import React, { useState } from 'react';
// connect is a higher order function
// connect()(Component_to_Connect)
// it returns connected version of the component
import { connect } from 'react-redux';
// import { createTodo } from '../../store/actions';
import { addTodoRequest } from '../../store/thunks';
// import './styles.css'; // Not needed now with styled components

import { getTodos } from '../../components/selectors';

import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px grey;
    justify-content: center;
`;
const TodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    margin: 8px;
    border: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;
const CreateButton = styled.button`
    font-size: 16px;
    padding: 8px;
    margin: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const TodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer
            // className="todo-form" // Not needed now with styled components
        >
            <TodoInput
                type="text"
                // className="todo-input" // Not needed now with styled components
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <CreateButton
                // className="create-button" // Not needed now with styled components
                onClick={() => {
                    const isDuplicateTodo = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateTodo) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                Create a Todo
            </CreateButton>
        </FormContainer>
    );
};

// Entire redux state gets passed here in state param
// This returns pieces of the state that this component needs access to
const mapStateToProps = state => ({
    todos: getTodos(state),
});

// dispatch param is a function that allows this component to trigger actions that redux store responds to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)), // Creates a proper action object for us
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);