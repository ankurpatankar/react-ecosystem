// Contains the action creators
export const CREATE_TODO = 'CREATE_TODO';

// Actual action that gets dispatched
// export const createTodo = {
//     type: CREATE_TODO,
// };

// Action creator
export const createTodo = (text) => {
    return {
        type: CREATE_TODO,
        payload: {
            text,
        }
    };
};

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => {
    return {
        type: REMOVE_TODO,
        payload: {
            text,
        }
    };
};

export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED';
export const markTodoCompleted = (text) => {
    return {
        type: MARK_TODO_COMPLETED,
        payload: {
            text,
        }
    }
}
