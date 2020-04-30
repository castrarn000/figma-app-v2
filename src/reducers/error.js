const errorReducer = (state = null, action) => {
    switch(action.type) {
        case 'ifError':
            return action.payload
        default:
            return state
    }
};

export default errorReducer;