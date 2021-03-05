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
