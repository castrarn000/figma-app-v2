import React from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Button from '@material-ui/core/Button';
import './SignUpBoxStyles.sass'

const SignUpBox = () => {
    return (
        <div className='createAccountBox'>
            <BubbleChartIcon className='bubbleIcon' />
            <span className='createAccount'>
                <span className='welcomeFigma'>Welcome to Figma!</span> Create an account to edit and collaborate on this file.
            </span>
            <span>
                <Button className='googleSignIn'>
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='' className='googleIcon' /> Sign up with Google
                </Button>
                <Button className='emailSignIn'>
                    Sign up with email
                </Button>
            </span>
        </div>
    );
}

export default SignUpBox;