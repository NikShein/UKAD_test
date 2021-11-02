import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/images/logo.png" alt="It is Logo"></img>
            <nav className={classes.nav}>
                <ul className={classes.navigation}>
                    <li><NavLink to="/" exact>HOME</NavLink></li>
                    <li><NavLink to="/products">PRODUCTS</NavLink></li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header;