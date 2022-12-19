import React from 'react'
import classes from './MealItem.module.css'
import {MealItemForm} from '../../Meals/MealItemForm/MealItemForm'

export const MealItem = (props) => {
    return (
        <div className={classes.meal}>
            <span>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.desc}
                </div>
                <div className={classes.price}>
                    ${props.price}
                </div>
            </span>
            <span>
                <MealItemForm id = {props.id} />
            </span>
        </div>
    )
}
