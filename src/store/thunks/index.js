// Thunks are functions that return another function that
// contains the actual logic that we are gonna perform whe its trigger

import {
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    createTodo,
    removeTodo,
    markTodoAsCompleted,
} from '../actions';

// sample thunk
export const displayAlert = text => () => {
    alert(text);
}

// When the thunk is triggered 2 arguments get passed to the second function `async ()`
// 1) dispatch - used to dispatch other redux actions within thunk
// 2) getState - get the current state of the redux store
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());

        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (error) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(error));
    }
}

export const addTodoRequest = text => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();

        dispatch(createTodo(todo));
    } catch(error) {
        dispatch(displayAlert(error));
    }
}

export const removeTodoRequest = id =>  async (dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete',
        });
        const removedTodo = await response.json();

        dispatch(removeTodo(removedTodo));
    } catch(error) {
        dispatch(displayAlert(error));
    }
}

export const markTodoAsCompletedRequest = id => async (dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post',
        });
        const updatedTodo = await response.json();

        dispatch(markTodoAsCompleted(updatedTodo));
    } catch(error) {
        dispatch(displayAlert(error));
    }
}