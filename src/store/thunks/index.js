// Thunks are functions that return another function that
// contains the actual logic that we are gonna perform whe its trigger

// sample thunk
export const displayAlert = () => () => {
    alert('hello');
}
