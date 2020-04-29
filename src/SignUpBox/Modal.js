import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isModalOpen } from '../actions/index';
import ModalUI from '@material-ui/core/Modal';
import './ModalStyles.sass';
import { InputBase } from '@material-ui/core';

const Modal = () => {
    const openModal = useSelector(state => state.isModalOpen);
    const dispath = useDispatch();

    const handleClose = () => {
        dispath(isModalOpen(false));
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            console.log('got enter')
        }
    }

    const body = (
        <div className='modalBody'>
            <div> Create an account to collaborate on </div>
            <div> "user" </div>
            <button className='googleSignIn modalButton' onClick={handleClose}>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='' className='googleIcon' /> Sign up with Google
            </button>
            <div> or </div>
            <div>
                <InputBase placeholder='Email' onKeyPress={handleEnter} className='modalButton' />
            </div>
            <div>
                <InputBase placeholder='Password' onKeyPress={handleEnter} className='modalButton' />
            </div>
            <button onClick={handleClose} className='modalButton'>
                Create Account
            </button>
            <div>
                Sign up with SAML SSO
            </div>
            <div>
                Already have an account? <span> Log in </span>
            </div>
        </div>
    );

    return (
        <ModalUI open={openModal} onClose={handleClose} className='modalContainer'>
            {body}
        </ModalUI>
    );
};

export default Modal;