import React from 'react'
import classes from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <span className={classes.icon}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}
