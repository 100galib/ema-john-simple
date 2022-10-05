import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-section'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;