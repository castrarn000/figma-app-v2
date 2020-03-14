const isLoadedReducer = (state = false, action) => {
    switch(action.type) {
        case 'isLoaded':
            return true
        default: 
            return state
    }
};

export default isLoadedReducer;