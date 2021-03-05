import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';

// persist reducer lets us persist data across sessions / refreshes
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this is going to resolve to localStorage on the web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
    todos,
};

// How to save and where to save the reducer data
const persistConfig = {
    key: 'root',
    storage, // refers to  localStorage on the web
    stateReconciler: autoMergeLevel2, // tells redux persist how to reconcile initial and stored states of our app
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer );

export const configureStore = () => createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() // connects redux store to the redux devtools extension
    );