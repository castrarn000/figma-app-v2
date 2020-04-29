import allUsersReducer from './allUsers';
import { combineReducers } from 'redux';
import errorReducer from './error';
import isLoadedReducer from './isLoaded';
import isModalOpenReducer from './isModalOpen';

const allReducers = combineReducers({
    error: errorReducer,
    isLoaded: isLoadedReducer,
    users: allUsersReducer,
    isModalOpen: isModalOpenReducer
});

export default allReducers;