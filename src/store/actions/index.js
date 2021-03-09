// Contains the action creators
export const CREATE_TODO = 'CREATE_TODO';

// Actual action that gets dispatched
// export const createTodo = {
//     type: CREATE_TODO,
// };

// Action creator
export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        payload: {
            todo,
        }
    };
};

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: {
            todo,
        }
    };
};

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_COMPLETED';
export const markTodoAsCompleted = (todo) => {
    return {
        type: MARK_TODO_AS_COMPLETED,
        payload: {
            todo,
        }
    }
}

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});
