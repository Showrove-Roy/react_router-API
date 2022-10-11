import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <NavLink to='/home' className={({isActive})=>isActive ? 'active': undefined }>Home</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive ? 'active': undefined }>About</NavLink>
            <NavLink to='/product' className={({isActive})=>isActive ? 'active': undefined }>Product</NavLink>
            <NavLink to='/friends' className={({isActive})=>isActive ? 'active': undefined }>Friends</NavLink>
            <NavLink to='/posts' className={({isActive})=>isActive ? 'active': undefined }>Post</NavLink>
            
        </nav>
    );
};

export default Header;