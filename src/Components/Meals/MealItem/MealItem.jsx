import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import {MealItemForm} from '../../Meals/MealItemForm/MealItemForm'
import { CartContext } from '../../../data/cart-context'

export const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <div className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.desc}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemToCartHandler} id = {props.id} />
            </div>
        </div>
    )
}
