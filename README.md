### Redux

One central global state called store that all components can access
Single source of truth for all data
Establishes strict rules for accessing data

Redux store - contains current state of the application
Redux Actions - Type and Payload - Explicitly define events that can happen in the application
Reducers - Specifies what happens to redux store state when an action occurs using payload data

-   Only allow actions that are explicitly defined
-   Only allow changes based on a preexisting definition present in the reducers

## Redux Persist

npm package `redux-persist` helps persist data stored into redux store across refreshes

## Redux best practices

-   Export both

*   Connected version of the component (as default export to be used by the rest of the application)
*   Unconnected version of the component (as a named export to be used by unit tests in order to avoid setting up a fake store)

-   Never trigger any other actions or async operations to get data from an API inside your reducers. Reducers are only meant to give a new state based on an action and the current state of the store

-   Think before connecting a component to the redux store since it makes components less reusable

### Side effect libraries

Give us a way to separate side effects logic

-   redux-thunk
-   redux-saga

## Redux Thunk

It provides a layer between the component and reducers

Normal flow:
Component -> Redux Action -> Reducer -> Store

Thunk flow:
Component -> Thunk Action -> Thunk -> Redux Action -> Reducer -> Store

`npm install redux-thunk redux-devtools-extension @babel/runtime`

redux-devtools-extension - Used to add thunk middleware to redux store

@babel/runtime - makes async thunks work

`@babel/plugin-transform-runtime` development version of @babel/runtime

## Selectors

Selectors give us a place to put logic for transforming data in the store into data our components can use
The selectors can be used in mapStateToProps to get the right data for example:

-   getCompletedTodos
-   getIncompleteTodos

## Reselect

`npm install reselect`

Allows us to use simpler selector to get more complex data or combine simple selectors to form a more complex selector

Lower order selectors are aware of the internal state storage within the redux store
Higher order selectors depend on lower order selectors and are unaware of how data is stored in redux store

`import { createSelector } from 'reselect';`

createSelector from the reselect library handles data through memoization. This means that it recomputes data only when the input data changes. If the underlying data does not change it remembers the result of the last computation and returns that value the next time the higher order selector is called.

### Styled Components

Styled component are CSS in JavaScript which allows us to define styling for components inside javascript files
Allows us to define our own UI components we can pass props to (i.e. pass selected and decide style rather than passing className based on conditions)

`npm install styled-components`

Example:

```
import styled from 'styled-components';

// The "`" are what are called as tagged functions
const BigRedText = styled.div`
    font-size: 48px;
    color: #FF0000;
`;

<BigRedText>I am a Styled Component</BigRedText>
```
