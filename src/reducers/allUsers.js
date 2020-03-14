const allUsersReducer = (state = [], action) => {
    switch(action.type) {
        case 'getAllUsers':
            return action.payload;
        default:
            return state
    }
};

export default allUsersReducer;