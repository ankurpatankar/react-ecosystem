import { createSelector } from 'reselect';
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

/**
 * createSelector takes any number of selectors as initial arguments with
 * the last one being a function whose arguments are responses of the chosen selectors
 */
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted)
);
export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted)
);
