import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/posts'>Post</Link>
        </nav>
    );
};

export default Header;