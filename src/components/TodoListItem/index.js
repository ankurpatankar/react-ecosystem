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
// example of passing props to styled components
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)) ? 'none' : '2px solid red'};
`;
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;
const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;
// example of extending styled components
const CompletedButton = styled(Button)`
    background-color: #22EE22;
`;
const RemoveButton = styled(Button)`
    background-color: #EE2222;
    margin-left: 8px;
    color: #FFFFFF;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;

    return (
        <Container
            createdAt={todo.createdAt}
            // className="todo-item-container" // Not needed now with styled components
        >
            <div
                // className="todo-item" // Not needed now with styled components
            >
                {todo.text}
            </div>
            <p>
                Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
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
        </Container>
    );
};

export default TodoListItem;
