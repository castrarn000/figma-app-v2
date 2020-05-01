import React, { useEffect, useRef } from 'react';
import './UsersTableStyles.sass';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded, users, ifError } from '../actions/index';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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

    const mainRef = useRef(null);

    const USERS_API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (ifLoaded) {
            mainRef.current.scrollIntoView({ inline: 'center' });
        }
    });

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
        <div className='tableContainer'>
            <div className='tableWrapper' ref={mainRef} tabIndex='-1'>
                Users
                <div className='tableBlock'>
                    <div className='innerUsers'>
                        <SortIcon className='sortIcon' />  &nbsp;  <span className='users'> Users </span>
                    </div>
                    <TableContainer className='tableHolder'>
                        <Table aria-label='All users tabble' style={{ borderTop: '1px solid lightgray' }} >
                            <TableHead>
                                <TableRow>
                                    <TableCell className='tableHeader fontSize'>
                                        <span className='nameArrow'>
                                            Name <ArrowDownwardIcon className='arrowDownIcon' />
                                        </span>
                                    </TableCell>
                                    <TableCell className='tableHeader fontSize'>
                                        Email
                                    </TableCell>
                                    <TableCell className='tableHeader fontSize'>
                                        Phone
                                    </TableCell>
                                    <TableCell className='tableHeader fontSize'>
                                        Company Tags
                                     </TableCell>
                                    <TableCell className='tableHeader fontSize'>
                                        Website
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allUsers.map(user => (
                                    <TableRow key={user.id} className='tableRow'>
                                        <TableCell component='th' scope='row'>
                                            <span className='usersNames fontSize'>
                                                <AccountCircleIcon className='accountImg' /> {user.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className='fontSize'>
                                            {user.email}
                                        </TableCell>
                                        <TableCell className='fontSize'>
                                            {user.phone}
                                        </TableCell>
                                        <TableCell className='fontSize'>
                                            <span className='tag'>
                                                {user.company.bs}
                                            </span>
                                        </TableCell>
                                        <TableCell className='fontSize'>
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
        <div class='loadingContainer'>
            <div class='loader'/>
        </div>
    );
}

export default UsersTable;