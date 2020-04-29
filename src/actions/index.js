export const isLoaded = () => {
    return {
        type: 'isLoaded'
    };
};

export const users = (arrayUsers) => {
    return {
        type: 'getAllUsers',
        payload: arrayUsers
    };
};

export const ifError = (error) => {
    return {
        type: 'ifError',
        payload: error
    };
};

export const isModalOpen = (openState) => {
    return {
        type: 'isModalOpen',
        payload: openState
    };
};