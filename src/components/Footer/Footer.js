import React from 'react';

import classes from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a href="/" className={classes.copyright}>2021 © COPYRIGHT</a>
        </footer>
    )
    
}

export default Footer;