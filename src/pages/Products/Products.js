import React from 'react';
import classes from './Products.module.css';

import Loader from '../../components/Loader/Loader';


const Products = (props) => {
    
    return (
        <div className={classes.container}>
            <h1>Products</h1>
            {
                props.loader ?
                <Loader/> :
                    <div className={classes.products}>
                        {props.productCards}
                    </div>
            }
        </div>
    )
    
}

export default Products;