const isModalOpenReducer = (state = false, action) => {
    switch(action.type) {
        case 'isModalOpen':
            return action.payload
        default: 
            return state
    }
};

export default isModalOpenReducer;