import React from 'react';
import Loader from '../../components/Loader/Loader';
import classes from './Main.module.css';
import Slider from '../Slider/Slider'


const Main = (props) => {
    
    
    return (
        <main className={classes.main}>
            {
                props.loader ?
                <Loader/> :
                <Slider
                    productCards={props.productCards}
                />
                
            }
            
        </main>
    )
    
}

export default Main;