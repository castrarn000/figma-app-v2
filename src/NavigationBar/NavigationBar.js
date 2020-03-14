import React from 'react';
import './NavigationBarStyles.sass';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import PanToolIcon from '@material-ui/icons/PanTool';

const NavigationBar = () => {
    return (
        <div className='navBar'>
            <Button className='stardardButton' style={{ minWidth: '40px' }}>
                <MenuIcon className='menuIcon' />
            </Button>
            <Button className='standardButton' style={ {minWidth:'40px', borderRadius: '0px', backgroundColor:'#18a0fb' }} >
                <PanToolIcon className='panMenuIcon' />
            </Button>
            <span className='navTitle'>
                users
            </span>
            <Button className='standardButton'>
                <HelpIcon className='helpIcon' />
            </Button>
            <Button style={{ height: '32px', border: '1px solid white', color: 'white', fontSize: '12px', marginTop: '3px', textTransform: 'none'}}>
                Log in
            </Button>
            <Button className='standardButton' style={{ minWidth: '40px' }}> 
                <ArrowRightIcon className='rightArrowIcon' />
            </Button>
            <Button className='expandButton' style={{minWidth: '40px', height: '40px', color: 'lightgray', fontSize:'10px' }}>
                100% <ExpandMoreIcon className='expandicon' />   
            </Button>
        </div>
    );
}

export default NavigationBar;