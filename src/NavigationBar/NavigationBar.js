import React, { useState, useEffect, useRef } from 'react';
import './NavigationBarStyles.sass';

const NavigationBar = () => {
    const anchorRef = useRef(null);
    const zoomMenuRef = useRef(null);

    const [menuToggle, setMenuToggle] = useState('displayNone');
    const [menuChecked, setMenuChecked] = useState([
        { spacerClass: 'displayNone', svgClass: 'displayinline', prevSelected: 0 },
        { spacerClass: 'displayinline', svgClass: 'displayNone' }
    ]);

    const [zoomPercentage, setZoomPercentage] = useState('100%');
    const [zoomMenuAnimation, setZoomMenuAnimation] = useState([
        { animationClass: 'displayNone', currentButtonToReset: 0 },
        { animationClass: 'displayNone' },
        { animationClass: 'displayNone' },
        { animationClass: 'displayNone' },
    ]);
    const [zoomToggle, setZoomToggle] = useState('displayNone');
    const [zoomClicked, setZoomClicked] = useState('zoomButtonUnClicked');
    const [showHoverBlue, setHoverBlue] = useState('pixelMenuHoverNormal');
    const [zoomLevelChecked, setZoomLevelChecked] = useState([
        { spacerClass: 'displayinline', svgClass: 'displayNone', prevSelected: 1 },
        { spacerClass: 'displayNone', svgClass: 'displayinline' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' }
    ]);
    const [zoomButtonChecked, setButtonChecked] = useState([
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
        { spacerClass: 'displayinline', svgClass: 'displayNone' },
    ]);

    const [showPixelMenu, setShowPixelMenu] = useState('displayNone');
    const [pixelButtonChecked, setPixelChecked] = useState([
        { checkedSpacer: 'displayNone', checkedSVG: 'displayinline', dotSpacer: 'displayinline', dotSVG: 'displayNone', prevSelected: 0 },
        { checkedSpacer: 'displayinline', checkedSVG: 'displayNone' },
        { checkedSpacer: 'displayinline', checkedSVG: 'displayNone' }
    ]);

    const [pixelGridVisible, setPixelGridVisible] = useState('displayNone');
    const [pixelGridHidden, setPixelGridHidden] = useState('displayNone');
    const [snapEnabled, setSnapEnabled] = useState('displayNone');
    const [snapDisabled, setSnapDisabled] = useState('displayNone');
    const [layoutVisible, setLayoutVisible] = useState('displayNone');
    const [layoutHidden, setLayoutHidden] = useState('displayNone');
    const [outlinesVisible, setOutlinesVisible] = useState('displayNone');
    const [outlinesHidden, setOutlinesHidden] = useState('displayNone');
    const [cursorsVisible, setCursorsVisible] = useState('displayNone');
    const [cursorsHidden, setCursorsHidden] = useState('displayNone');

    const handleToggle = () => {
        if (menuToggle === 'displayNone') {
            setMenuToggle('showMenu standardBubbleSquare');
        } else {
            setMenuToggle('displayNone');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleMenuClose);
        return () => {
            document.removeEventListener('click', handleMenuClose)
        }
    });

    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuToggle('displayNone');
    };

    const handleMenuSelect = (buttonID) => {
        let prevButtonID = menuChecked[0].prevSelected;
        if (buttonID === prevButtonID) {
            return;
        };
        let copy = Object.assign(menuChecked);
        copy[prevButtonID].spacerClass = 'displayinline';
        copy[prevButtonID].svgClass = 'displayNone';
        copy[buttonID].spacerClass = 'displayNone';
        copy[buttonID].svgClass = 'displayinline';
        copy[0].prevSelected = buttonID;
        setMenuChecked(copy);
    };

    const handleZoomInput = (event) => {
        if (event.key === 'Enter') {
            setZoomPercentage(event.target.value+'%');     //this would then take care of performing the zoom to desired input 
            handleZoomToggle();                        //or would then call another function to do it
        };
    };

    const handleZoomIn = () => {                    //this would then call or hadle zoomIn function
        if (zoomPercentage === '81%'){              //for demostration purposes
            setZoomPercentage('100%');
        } else {
            let currentZoom = parseInt(zoomPercentage, 10);
            if (currentZoom >= 25600) {
                setZoomPercentage('25600%')
                return;
            }
            currentZoom = currentZoom*2;
            if (currentZoom >= 25600) {
                setZoomPercentage('25600%')
                return;
            }
            currentZoom = currentZoom.toString();
            currentZoom = currentZoom + '%';
            setZoomPercentage(currentZoom);
        }
        handleZoomToggle();
    };

    const handleZoomOut = () => {                   //this would then call or hadle zoom out function that would handle zoomOut
        if (zoomPercentage === '81%'){              //for desmostration purposes
            setZoomPercentage('50%');
        } else {
            let currentZoom = parseInt(zoomPercentage, 10);
            if (currentZoom < 2) {
                setZoomPercentage('2%');
                return;
            }
            currentZoom = currentZoom/2;
            if (currentZoom < 2) {
                setZoomPercentage('2%');
                return;
            }
            currentZoom = currentZoom.toString();
            currentZoom = currentZoom + '%';
            setZoomPercentage(currentZoom);
        }
        handleZoomToggle();
    };

    useEffect(() => {
        document.addEventListener('click', handleZoomClose);
        return () => {
            document.removeEventListener('click', handleZoomClose)
        };
    });

    const handleZoomClose = (event) => {
        if (zoomMenuRef.current && zoomMenuRef.current.contains(event.target)) {
            return;
        }
        setZoomClicked('zoomButtonUnClicked')
        setZoomToggle('displayNone');
    };

    const handleZoomToggle = () => {
        if (zoomToggle === 'displayNone') {
            setZoomToggle('displayBlock');
            setZoomClicked('zoomButtonClicked')
        } else {
            setZoomToggle('displayNone');
            setZoomClicked('zoomButtonUnClicked')
        }
    };

    const handleZoomLevelChange = (buttonID) => {
        let prevButtonID = zoomLevelChecked[0].prevSelected;
        if (buttonID === prevButtonID) {
            return;
        }
        let copy = Object.assign(zoomLevelChecked);
        copy[prevButtonID].svgClass = 'displayNone';
        copy[prevButtonID].spacerClass = 'displayinline';
        copy[buttonID].svgClass = 'displayinline';
        copy[buttonID].spacerClass = 'displayNone';
        copy[0].prevSelected = buttonID;
        setZoomLevelChecked(copy);
        if (buttonID === 0){        //at this point I would call a function that takes care of the zooming
            setZoomPercentage('50%');  //this is all for demostration purposes
        }
        if (buttonID === 1){
            setZoomPercentage('100%');
        }
        if (buttonID === 2){
            setZoomPercentage('200%');
        }
        handleZoomToggle();
    };

    const handleCheckedToggle = (buttonID) => {
        let copy = Object.assign(zoomButtonChecked);
        copy[0].currentButtonToReset = buttonID;
        if (copy[buttonID].spacerClass === 'displayNone') {
            copy[buttonID].spacerClass = 'displayinline';
            copy[buttonID].svgClass = 'displayNone';
            if (buttonID === 0) {
                setPixelGridHidden('displayAnimation');
                setPixelGridVisible('displayNone');
            }
            if (buttonID === 1) {
                setSnapDisabled('displayAnimation');
                setSnapEnabled('displayNone');
            }
            if (buttonID === 2) {
                setLayoutHidden('displayAnimation');
                setLayoutVisible('displayNone');
            }
            if (buttonID === 4) {
                setOutlinesHidden('displayAnimation');
                setOutlinesVisible('displayNone');
            }
            if (buttonID === 5) {
                setCursorsHidden('displayAnimation');
                setCursorsVisible('displayNone');
            }
        } else {
            copy[buttonID].spacerClass = 'displayNone';
            copy[buttonID].svgClass = 'displayinline';
            if (buttonID === 0) {
                setPixelGridVisible('displayAnimation');
                setPixelGridHidden('displayNone');
            }
            if (buttonID === 1) {
                setSnapEnabled('displayAnimation');
                setSnapDisabled('displayNone');
            }
            if (buttonID === 2) {
                setLayoutVisible('displayAnimation');
                setLayoutHidden('displayNone');
            }
            if (buttonID === 4) {
                setOutlinesVisible('displayAnimation');
                setOutlinesHidden('displayNone');
            }
            if (buttonID === 5) {
                setCursorsVisible('displayAnimation');
                setCursorsHidden('displayNone');
            }
        }
        setButtonChecked(copy);
        handleZoomToggle();
    };

    const handlePixelMenuToggle = (buttonID) => {
        let prevButtonID = pixelButtonChecked[0].prevSelected;
        if (buttonID === prevButtonID) {
            return;
        }
        let copy = Object.assign(pixelButtonChecked);
        copy[prevButtonID].checkedSVG = 'displayNone';
        copy[prevButtonID].checkedSpacer = 'displayinline';
        if (buttonID === 0) {
            copy[buttonID].dotSVG = 'displayNone';
            copy[buttonID].dotSpacer = 'displayinline';
            copy[buttonID].checkedSVG = 'displayinline';
            copy[buttonID].checkedSpacer = 'displayNone';
        } else {
            copy[buttonID].checkedSVG = 'displayinline';
            copy[buttonID].checkedSpacer = 'displayNone';
            copy[0].dotSVG = 'displayinline';
            copy[0].dotSpacer = 'displayNone';
        }
        copy[0].prevSelected = buttonID;
        setPixelChecked(copy);
        handleAnimation(buttonID + 1);
    };

    const pixelMenuHover = () => {
        setShowPixelMenu('displayinline');
        setHoverBlue('pixelMenuHoverBlue');
    };

    const pixelMenuCollapse = () => {
        setShowPixelMenu('displayNone');
        setHoverBlue('pixelMenuHoverNormal');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            let copy = Object.assign(zoomMenuAnimation);
            let buttonID = copy[0].currentButtonToReset;
            copy[buttonID].animationClass = 'displayNone';
            setZoomMenuAnimation(copy);
        }, 1800);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zoomMenuAnimation[0].animationClass, zoomMenuAnimation[1].animationClass, zoomMenuAnimation[2].animationClass, zoomMenuAnimation[3].animationClass]);

    const handleAnimation = (buttonID) => {
        let copy = Object.assign(zoomMenuAnimation);
        copy[0].currentButtonToReset = buttonID;
        copy[buttonID].animationClass = 'displayAnimation';
        if(buttonID === 0){
            setZoomPercentage('81%');  //call a function here that actully does something for zoomToFit
        }
        setZoomMenuAnimation(copy);
        let prevButtonID = zoomLevelChecked[0].prevSelected;
        let tempState = Object.assign(zoomLevelChecked);
        tempState[prevButtonID].svgClass = 'displayNone';
        tempState[prevButtonID].spacerClass = 'displayinline';
        setZoomLevelChecked(tempState);
        handleZoomToggle();
    };

    return (
        <div className='navBar'>
            <button className='standardButton menuButtonHover' onClick={handleToggle} ref={anchorRef}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='menuSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' /></svg>
                <div className='menuHover standardBubbleSquare standardDisplayFlex'>
                    Search... &nbsp; &nbsp; <span className='keyColor'>Ctrl+/</span>
                </div>
            </button>
            <div className={menuToggle}>
                <button className='topMenu subButton' onClick={() => handleMenuSelect(0)}>
                    <span className={`${menuChecked[0].spacerClass} spacer`}> &nbsp; </span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${menuChecked[0].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Page 1
                </button>
                <button className='subButton' onClick={() => handleMenuSelect(1)}>
                    <span className={`${menuChecked[1].spacerClass} spacer`}> &nbsp; </span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${menuChecked[1].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Symbols
                </button>
            </div>

            <button className='standardButton handButtonHover pixelMenuHoverBlue'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='panSVG'><path d='M0 0h24v24H0z' fill='none' /><path d='M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4zM4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z' /></svg>
                <div className='handHover standardBubbleSquare standardDisplayFlex'>
                    Hand Tool &nbsp; &nbsp; <span className='keyColor'>H</span>
                </div>
            </button>

            <span className='navTitle'>
                users
            </span>

            <button className='standardButton anonymousButton'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='helpSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z' /></svg>
                <div className='anonymousHover standardBubbleSquare standardDisplayFlex'>
                    Anonymous
                </div>
            </button>

            <button className='standardButton logInButton'>
                Log in
            </button>

            <button className='standardButton playButton'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='playArrowSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z' /></svg>
                <div className='playHover standardBubbleSquare standardDisplayFlex'>
                    Present
                </div>
            </button>

            <button className={`expandButton ${zoomClicked}`} onClick={handleZoomToggle} ref={zoomMenuRef}>
                {zoomPercentage} <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='arrowDownSVG'><path d='M0 0h24v24H0V0z' fill='none' /><path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' /></svg>
            </button>
            <div className={`${zoomToggle} zoomMemu standardBubbleSquare`}>
                <input type='text' value={zoomPercentage} className='zoomInput' onChange={handleZoomInput} onKeyPress={handleZoomInput} />

                <hr className='horizontalLines' />

                <button className='zoomButton zoomTopButton' onClick={handleZoomIn}>
                    <span className='zoomSpacer'> &nbsp;</span>
                    Zoom in
                    <span className='keyShortCuts'> + </span>
                </button>

                <button className='zoomButton' onClick={handleZoomOut}>
                    <span className='zoomSpacer'> &nbsp;</span>
                    Zoom out
                    <span className='keyShortCuts'> - </span>
                </button>

                <button className='zoomButton' onClick={() => handleAnimation(0)}>
                    <span className='zoomSpacer '> &nbsp;</span>
                    Zoom to Fit
                    <span className='keyShortCuts'> 1 </span>
                </button>

                <button className='zoomButton' onClick={() => handleZoomLevelChange(0)}>
                    <span className={`${zoomLevelChecked[0].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomLevelChecked[0].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Zoom to 50%
                </button>

                <button className='zoomButton' onClick={() => handleZoomLevelChange(1)}>
                    <span className={`${zoomLevelChecked[1].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomLevelChecked[1].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Zoom to 100%
                    <span className='keyShortCuts'> &#48; </span>
                </button>

                <button className='zoomButton' onClick={() => handleZoomLevelChange(2)}>
                    <span className={`${zoomLevelChecked[2].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomLevelChecked[2].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Zoom to 200%
                </button>

                <hr className='horizontalLines' />

                <button className={`${showHoverBlue} zoomButton`} onMouseOver={pixelMenuHover} onMouseOut={pixelMenuCollapse} onClick={() => handlePixelMenuToggle(0)}>
                    <span className={`${pixelButtonChecked[0].dotSpacer} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${pixelButtonChecked[0].dotSVG} dotSVG`}><path d="M24 24H0V0h24v24z" fill="none" /><circle cx="12" cy="12" r="8" /></svg>
                    Pixel Preview
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='arrowRightSVG'><path d='M8 5v14l11-7z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
                </button>
                <span className={`${showPixelMenu} pixelMenu`}>
                    <button className='pixelMenuButton pixelMenutop' onMouseOver={pixelMenuHover} onMouseOut={pixelMenuCollapse} onClick={() => handlePixelMenuToggle(0)}>
                        <span className={`${pixelButtonChecked[0].checkedSpacer} zoomSpacer`}> &nbsp;</span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${pixelButtonChecked[0].checkedSVG} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                        Disabled
                        <span className='keyShortCuts'> Ctrl+Alt+Y </span>
                    </button>
                    <button className='pixelMenuButton' onMouseOver={pixelMenuHover} onMouseOut={pixelMenuCollapse} onClick={() => handlePixelMenuToggle(1)}>
                        <span className={`${pixelButtonChecked[1].checkedSpacer} zoomSpacer`}> &nbsp;</span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${pixelButtonChecked[1].checkedSVG} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                        1x
                        <span className={`${pixelButtonChecked[1].checkedSVG} keyShortCuts`}> Ctrl+Alt+Y </span>
                    </button>
                    <button className='pixelMenuButton' onMouseOver={pixelMenuHover} onMouseOut={pixelMenuCollapse} onClick={() => handlePixelMenuToggle(2)}>
                        <span className={`${pixelButtonChecked[2].checkedSpacer} zoomSpacer`}> &nbsp;</span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${pixelButtonChecked[2].checkedSVG} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                        2x
                        <span className={`${pixelButtonChecked[2].checkedSVG} keyShortCuts`}> Ctrl+Alt+Y </span>
                    </button>
                </span>

                <button className='zoomButton' onClick={() => handleCheckedToggle(0)}>
                    <span className={`${zoomButtonChecked[0].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[0].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Pixel Grid
                    <span className='keyShortCuts'> Ctrl+' </span>
                </button>

                <button className='zoomButton' onClick={() => handleCheckedToggle(1)}>
                    <span className={`${zoomButtonChecked[1].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[1].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Snap to Pixel Grid
                    <span className='keyShortCuts'> Ctrl+Shift+' </span>
                </button>

                <button className='zoomButton' onClick={() => handleCheckedToggle(2)}>
                    <span className={`${zoomButtonChecked[2].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[2].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Layout Grids
                    <span className='keyShortCuts'> Ctrl+Shift+4 </span>
                </button>

                <button className='zoomButton' onClick={() => handleCheckedToggle(3)}>
                    <span className={`${zoomButtonChecked[3].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[3].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Rulers
                    <span className='keyShortCuts'> Shift+R </span>
                </button>

                <button className='zoomButton' onClick={() => handleCheckedToggle(4)}>
                    <span className={`${zoomButtonChecked[4].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[4].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Outlines
                    <span className='keyShortCuts'> Ctrl+Shift+3 </span>
                </button>

                <button className='zoomButton' onClick={() => handleCheckedToggle(5)}>
                    <span className={`${zoomButtonChecked[5].spacerClass} zoomSpacer`}> &nbsp;</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`${zoomButtonChecked[5].svgClass} checkedSVG`}><path d='M0 0h24v24H0z' fill='none' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
                    Multiplayers Cursors
                    <span className='keyShortCuts'> Ctrl+Alt+\ </span>
                </button>
            </div>

            <span className={`${zoomMenuAnimation[0].animationClass} onclickPopUpMessage shortPopUpMessage`}>
                Zoom to fit
            </span>

            <span className={`${zoomMenuAnimation[1].animationClass} onclickPopUpMessage longPopUpMessage`}>
                Pixel preview disabled
            </span>

            <span className={`${zoomMenuAnimation[2].animationClass} onclickPopUpMessage longPopUpMessage`}>
                Pixel preview enabled (1x)
            </span>

            <span className={`${zoomMenuAnimation[3].animationClass} onclickPopUpMessage longPopUpMessage`}>
                Pixel preview enabled (2x)
            </span>

            <span className={`${pixelGridVisible} onclickPopUpMessage longPopUpMessage`}>
                Pixel grid visible
            </span>
            <span className={`${pixelGridHidden} onclickPopUpMessage longPopUpMessage`}>
                Pixel grid hidden
            </span>

            <span className={`${snapEnabled} onclickPopUpMessage longPopUpMessage`}>
                Snap to grid enabled
            </span>
            <span className={`${snapDisabled} onclickPopUpMessage longPopUpMessage`}>
                Snap to grid disabled
            </span>

            <span className={`${layoutVisible} onclickPopUpMessage longPopUpMessage`}>
                Layout grids visible
            </span>
            <span className={`${layoutHidden} onclickPopUpMessage longPopUpMessage`}>
                Layout grids hidden
            </span>

            <span className={`${outlinesVisible} onclickPopUpMessage longPopUpMessage`}>
                Outlines visible
            </span>
            <span className={`${outlinesHidden} onclickPopUpMessage longPopUpMessage`}>
                Outlines hidden
            </span>

            <span className={`${cursorsVisible} onclickPopUpMessage longPopUpMessage`}>
                Multiple cursors visible
            </span>
            <span className={`${cursorsHidden} onclickPopUpMessage longPopUpMessage`}>
                Multiple cursors hidden
            </span>
        </div>
    );
}

export default NavigationBar;