import React, { useEffect } from 'react';
import './UsersTable.sass';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded, users, ifError } from '../actions/index';

const UsersTable = () => {
    // const errorMessage = useSelector(state => state.error);
    // const ifLoaded = useSelector(state => state.isLoaded);
    // const allUsers = useSelector(state => state.users);
    const dispath = useDispatch();

    const USERS_API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        fetch(USERS_API)
            .then(res => res.json())
            .then(
                (result) => {
                    dispath(users(result));
                    dispath(isLoaded());
                },
                (error) => {
                    dispath(ifError(error));
                    dispath(isLoaded());
                }
            )
    };

    return (
        <div>
            
        </div>
    );
}

export default UsersTable;