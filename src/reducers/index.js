import allUsersReducer from './allUsers';
import { combineReducers } from 'redux';
import errorReducer from './error';
import isLoadedReducer from './isLoaded';

const allReducers = combineReducers({
    error: errorReducer,
    isLoaded: isLoadedReducer,
    users: allUsersReducer,
});

export default allReducers;