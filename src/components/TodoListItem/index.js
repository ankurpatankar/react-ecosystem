import React from "react";
// import './styles.css'; // Not needed now with styled components

import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;
const TodoItem = styled.div``;
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;
const CompletedButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #22EE22;
`;
const RemoveButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #EE2222;
    margin-left: 8px;
    color: #FFFFFF;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer
        // className="todo-item-container" // Not needed now with styled components
    >
        <TodoItem
            // className="todo-item" // Not needed now with styled components
        >
            {todo.text}
        </TodoItem>
        <ButtonsContainer
            // className="buttons-container" // Not needed now with styled components
        >
            {
                !todo.isCompleted && (
                    <CompletedButton
                        // className="completed-button" // Not needed now with styled components
                        onClick={() => onCompletedPressed(todo.id)}
                    >
                        Mark as Completed
                    </CompletedButton>
                )
            }
            <RemoveButton
                // className="remove-button" // Not needed now with styled components
                onClick={() => onRemovePressed(todo.id)}
            >
                Remove
            </RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
);

export default TodoListItem;
