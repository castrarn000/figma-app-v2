import React, { useState, useEffect, useRef } from 'react';
import './NavigationBarStyles.sass';

const NavigationBar = () => {
    const [menuToggle, setMenuToggle] = useState('displayNone');
    const [displayPage1Select, setPage1] = useState('displayBlock');
    const [displaySymbolsSelect, setSymbols] = useState('displayNone');
    const anchorRef = useRef(null);

    const handleToggle = () => {
        if (menuToggle === 'displayNone') {
            setMenuToggle('show');
        } else {
            setMenuToggle('displayNone');
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
        setMenuToggle('displayNone');
    };

    const handlePage1Select = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuToggle('displayNone');
        setSymbols('displayNone')
        setPage1('displayBlock')
    };

    const handleSymbolsSelect = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuToggle('displayNone');
        setSymbols('displayBlock')
        setPage1('displayNone')
    };

    return (
        <div className='navBar'>
            <button className='standardButton menuButtonHover' onClick={handleToggle} ref={anchorRef}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='menuSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' /></svg>
                <div className='menuHover'>
                    Search... &nbsp; &nbsp; <span className='keyColor'>Ctrl+/</span>
                </div>
            </button>
            <div className={menuToggle}>
                <button className='topMenu subButton' onClick={handlePage1Select}>
                    <span className={displayPage1Select}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='checkedSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg> Page 1
                    </span>
                    <span className={displaySymbolsSelect}>
                        <span className='spacer'> &nbsp; </span> Page 1
                    </span>
                </button>
                <button className='subButton' onClick={handleSymbolsSelect}>
                    <span className={displayPage1Select}>
                        <span className='spacer'> &nbsp; </span> Symbols
                    </span>
                    <span className={displaySymbolsSelect}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='checkedSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg> Symbols
                    </span>
                </button>
            </div>

            <button className='standardButton handButtonHover' style={{ backgroundColor: '#18a0fb' }} >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='panSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z' /></svg>
                <div className='handHover'>
                    Hand Tool &nbsp; &nbsp; <span className='keyColor'>H</span>
                </div>
            </button>

            <span className='navTitle'>
                users
            </span>

            <button className='standardButton anonymousButton'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='helpSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z' /></svg>
                <div className='anonymousHover'>
                    Anonymous
                </div>
            </button>

            <button className='standardButton logInButton'>
                Log in
            </button>

            <button className='standardButton playButton'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='playArrowSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z' /></svg>
                <div className='playHover'>
                    Present
                </div>
            </button>

            <button className='expandButton'>
                100% <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='arrowDownSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' /></svg>
            </button>
        </div>
    );
}

export default NavigationBar;