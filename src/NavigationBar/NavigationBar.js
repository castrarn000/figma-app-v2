import React, { useState, useRef } from 'react';
import './NavigationBarStyles.sass';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import PanToolIcon from '@material-ui/icons/PanTool';
import Popper from '@material-ui/core/Popper';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <div className='navBar'>
            <div>
                <Button
                    ref={anchorRef}
                    className='stardardButton'
                    style={{ minWidth: '40px' }}
                    onClick={handleToggle}
                >
                    <MenuIcon className='menuIcon' />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} transition disablePortal className='test'>
                    {({ TransitionProps }) => (
                        <Grow
                            {...TransitionProps}
                            className='growMenu'
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={handleClose}>Paper 1</MenuItem>
                                        <MenuItem onClick={handleClose}>Symbols</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>


            <Button className='standardButton' style={{ minWidth: '40px', borderRadius: '0px', backgroundColor: '#18a0fb' }} >
                <PanToolIcon className='panMenuIcon' />
            </Button>
            <span className='navTitle'>
                users
            </span>
            <Button className='standardButton'>
                <HelpIcon className='helpIcon' />
            </Button>
            <Button style={{ height: '32px', border: '1px solid white', color: 'white', fontSize: '12px', marginTop: '3px', textTransform: 'none' }}>
                Log in
            </Button>
            <Button className='standardButton' style={{ minWidth: '40px' }}>
                <ArrowRightIcon className='rightArrowIcon' />
            </Button>
            <Button className='expandButton' style={{ minWidth: '40px', height: '40px', color: 'lightgray', fontSize: '10px' }}>
                100% <ExpandMoreIcon className='expandicon' />
            </Button>
        </div>
    );
}

export default NavigationBar;