import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { CartContext } from '../../../../data/cart-context'

export const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);
   
    return (
        <button className={classes.button} onClick={props.onShowModel}>
            <span className={classes.icon}>
                <span className={classes.icon}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
