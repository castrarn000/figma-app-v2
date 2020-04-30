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

    const body = (
        <div className='modalBody'>
            <div className='spacer'/>
            <div className='marginTop'> Create an account to collaborate on </div>
            <div className='marginBottom'> "users" </div>
            <button className='standardComp googleButton' onClick={handleClose}>
                <img src='https://img.icons8.com/color/16/000000/google-logo.png' alt='' className='googleIcon' /> Sign up with Google
            </button>
            <div className='marginBottom or'> or </div>
            <div>
                <InputBase placeholder='Email' className='standardComp inputFocus'/>
            </div>
            <div>
                <InputBase placeholder='Password' className='standardComp inputFocus'/>
            </div>
            <button onClick={handleClose} className='standardComp createAccountButton'>
                Create Account
            </button>
            <div className='blueText marginTop' onClick={handleClose}>
                Sign up with SAML SSO
            </div>
            <div className='marginTop grayColor haveAccount'>
                Already have an account? <span className='blueText' onClick={handleClose}> Log in </span>
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