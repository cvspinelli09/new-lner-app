import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/logo';

import './header.styles.css';


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/Knowledge'>Knowledge</Link>
            <Link className='option' to='/Yankee'>Yankee Jobs</Link>
            <Link className='option' to='/Headcode'>Headcode</Link>
        </div>
    </div>
);

export default Header;

