import React, { useContext } from 'react'
import classes from './Cart.module.css'
import { CartItem } from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'

import { CartContext } from '../../data/cart-context'

export const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    return (

        <Modal>
            <div className={classes['cart-items']}>
                <CartItem ctx={cartCtx} />
            </div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClosedModel}>Cancel</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>

    )
}
