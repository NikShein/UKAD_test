import React from 'react';

import classes from './ProductCard.module.css';


const ProductCard = (props) => {
    return (
        <div className={classes.productCard}>
            <img style={{}} className={classes.productImage} src={props.image} alt="It is Logo"></img>
            <div className={classes.text}>
                <small>{props.category}</small>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
    
}

export default ProductCard;