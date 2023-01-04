import React from 'react'
import classes from './CartItem.module.css'

export const CartItem = (props) => {

    const cartItemRemoveHandler = id => {};
    const cartItemAddHander = item => {};

    return (
        <>
            {
                props.ctx.items.map((e, i) => (

                    <li key={i} className={classes['cart-item']} >
                        <div>
                            <h2>{e.name}</h2>
                            <div className={classes.summary}>
                                <span className={classes.price}>${e.price}</span>
                                <span className={classes.amount}>x {e.amount}</span>
                            </div>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={cartItemRemoveHandler.bind(null, e.id)}>-</button>
                            <button onClick={cartItemAddHander.bind(null, e)}>+</button>
                        </div>
                    </li>

                ))
            }
        </>
    );
}
