import React from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { isModalOpen } from '../actions/index';
import './SignUpBoxStyles.sass'

const SignUpBox = () => {
    const dispath = useDispatch();

    const handleSignUp = () => {
        dispath(isModalOpen(true));
    };

    return (
        <div className='createAccountBox'>
            <BubbleChartIcon className='bubbleIcon' />
            <span className='createAccount'>
                <span className='welcomeFigma'>Welcome to Figma!</span> Create an account to edit and collaborate on this file.
            </span>
            <span className='buttons'>
                <Button className='googleSignIn' onClick={handleSignUp}>
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='' className='googleIcon' /> Sign up with Google
                </Button>
                <Button className='emailSignIn' onClick={handleSignUp}>
                    Sign up with email
                </Button>
            </span>
        </div>
    );
};

export default SignUpBox;