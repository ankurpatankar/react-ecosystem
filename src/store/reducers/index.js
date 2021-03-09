import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from '../actions';

const initialState = { isLoading: false, data: [] };

// every time an action is called in our app the reducer gets called
// Params would be current state and action that was triggered and decide what changes in state should occur
// Returns the updated state and redux sets that state to current state
// When using reducers remember to NOT MUTATE the state in any way
export const todos = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            // .concat on an array does not mutate the original array
            return {
                ...state,
                data: state.data.concat(todo),
            };
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id)
            };
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: completedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id !== completedTodo.id) {
                        return todo;
                    } else {
                        return completedTodo;
                    }
                }),
            };
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos
            };
        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            // The default ALWAYS needs to be returning the current state because
            // if an action is not found then the default case will always be trigerred.
            return state;
    }
}