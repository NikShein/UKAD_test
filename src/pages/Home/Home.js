import React from 'react';

import Main from '../../containers/Main/Main'
import classes from './Home.module.css';


const Home = (props) => {
    
    return (
        <div className={classes.home}>
            <h1 className={classes.h1}>Home Page</h1>
            <Main
                productCards={props.productCards}
                loader={props.loader}
            />
        </div>
    )
    
}

export default Home;