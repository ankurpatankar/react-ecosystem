import React, { useState } from 'react';
// connect is a higher order function
// connect()(Component_to_Connect)
// it returns connected version of the component
import { connect } from 'react-redux';
import { createTodo } from '../../store/actions';
import './styles.css';

const TodoForm = ({ todos, onCreatePressed }) => {
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
            <button
                className="create-button"
                onClick={() => {
                    const isDuplicateTodo = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateTodo) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                Create a Todo
            </button>
        </div>
    );
};

// Entire redux state gets passed here in state param
// This returns pieces of the state that this component needs access to
const mapStateToProps = state => ({
    todos: state.todos,
});

// dispatch param is a function that allows this component to trigger actions that redux store responds to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)), // Creates a proper action object for us
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);