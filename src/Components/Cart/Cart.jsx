import React from 'react'
import classes from './Cart.module.css'
import { CartItem } from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'

export const Cart = (props) => {


    return (

        <Modal>
            <CartItem />
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$0.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClosedModel}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )
}
