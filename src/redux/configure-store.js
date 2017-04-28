import { createStore } from 'redux';

import {
    initialState,
    rootReducer
} from './reducers';

export const configureStore = () => createStore(
    rootReducer,
    initialState
);

export default configureStore;
