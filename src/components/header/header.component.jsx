import React from 'react';
import Logo from '../Logo/logo';
import './header.styless.css';


class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <Logo />
            </div>
        );
    }
};


export default Header;

