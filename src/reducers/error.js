const errorReducer = (state = null, action) => {
    switch(action.type) {
        case 'ifError':
            return action.error
        default:
            return state
    }
};

export default errorReducer;