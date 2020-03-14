import React, { useEffect } from 'react';
import './UsersTableStyles.sass';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded, users, ifError } from '../actions/index';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SortIcon from '@material-ui/icons/Sort';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const UsersTable = () => {
    const errorMessage = useSelector(state => state.error);
    const ifLoaded = useSelector(state => state.isLoaded);
    const allUsers = useSelector(state => state.users);
    const dispath = useDispatch();

    const USERS_API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (errorMessage !== null) {
        return errorMessage;
    }

    return (ifLoaded ?
        <div className='outerScroller'>
            <div className='tableWrapper'>
                Users
            <div className='tableBlock'>
                    <SortIcon /> Users
                <TableContainer >
                        <Table aria-label='All users tabble' style={{ borderTop: '1px solid lightgray' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Name <ArrowDownwardIcon /> </TableCell>
                                    <TableCell> Email </TableCell>
                                    <TableCell> Phone </TableCell>
                                    <TableCell> Company Tags </TableCell>
                                    <TableCell> Website </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allUsers.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell component="th" scope="row">
                                            {user.name}
                                        </TableCell>
                                        <TableCell>
                                            {user.email}
                                        </TableCell>
                                        <TableCell>
                                            {user.phone}
                                        </TableCell>
                                        <TableCell>
                                            {user.company.bs}
                                        </TableCell>
                                        <TableCell>
                                            {user.website}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
        :
        <div>
            still waiting
        </div>
    );
}

export default UsersTable;