import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from '../actions';

export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_TODOS_IN_PROGRESS: {
            return true;
        }
        case LOAD_TODOS_SUCCESS: {
            return false;
        }
        case LOAD_TODOS_FAILURE: {
            return false;
        }

        default:
            return state;
    }
}

// every time an action is called in our app the reducer gets called
// Params would be current state and action that was triggered and decide what changes in state should occur
// Returns the updated state and redux sets that state to current state
// When using reducers remember to NOT MUTATE the state in any way
export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            // .concat on an array does not mutate the original array
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return state.filter(todo => todo.id !== todoToRemove.id);
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: completedTodo } = payload;
            return state.map(todo => {
                if (todo.id !== completedTodo.id) {
                    return todo;
                } else {
                    return completedTodo;
                }
            })
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return state;
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_FAILURE: {
            return state;
        }

        default:
            // The default ALWAYS needs to be returning the current state because
            // if an action is not found then the default case will always be trigerred.
            return state;
    }
}