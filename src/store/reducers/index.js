import { CREATE_TODO, REMOVE_TODO } from '../actions';

// every time an action is called in our app the reducer gets called
// Params would be current state and action that was triggered and decide what changes in state should occur
// Returns the updated state and redux sets that state to current state
// When using reducers remember to NOT MUTATE the state in any way
export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            }
            // .concat on an array does not mutate the original array
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        default:
            // The default ALWAYS needs to be returning the current state because
            // if an action is not found then the default case will always be trigerred.
            return state;
    }
}