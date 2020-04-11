import React, { useState, useEffect, useRef } from 'react';
import './NavigationBarStyles.sass';

const NavigationBar = () => {
    const [menuToggle, setMenuToggle] = useState('subMenuClose');
    const anchorRef = useRef(null);

    const handleToggle = () => {
        if (menuToggle === 'subMenuClose') {
            setMenuToggle('show');
        } else {
            setMenuToggle('subMenuClose');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClose);
        return () => {
            document.removeEventListener('click', handleClose)
        }
    });

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuToggle('subMenuClose');
    };

    return (
        <div className='navBar'>
            <button className='standardButton menuIcon' onClick={handleToggle} ref={anchorRef}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='menuSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' /></svg>
            </button>
            <div className={menuToggle}>
                <button className='subButton' onClick={handleClose}>
                    <span className='checkSpan'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='checkedSVG'><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                    </span>
                    Page 1
                </button>
                <button className='subButton' onClick={handleClose}>
                    <span className='checkSpan'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='checkedSVG'><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                    </span>
                    Symbols
                </button>
            </div>

            <button className='standardButton' style={{ backgroundColor: '#18a0fb' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' className='panSVG'><path d="M0 0h24v24H0z" fill="none" /><path d="M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z" /></svg>
            </button>

            <span className='navTitle'>
                users
            </span>

            <button className='standardButton'>

            </button>

            <button className='standardButton' >
                {/* style={{ height: '32px', border: '1px solid white', color: 'white', fontSize: '12px', marginTop: '3px', textTransform: 'none' }} */}
                Log in
            </button>

            <button className='standardButton'>

            </button>

            <button className='expandButton'>
                {/* style={{ minWidth: '40px', height: '40px', color: 'lightgray', fontSize: '10px' }}> */}
                100%
            </button>
        </div>
    );
}

export default NavigationBar;