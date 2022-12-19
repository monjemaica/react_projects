import React from 'react'
import classes from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const HeaderCartButton = (props) => {

    const openModalHandler = () => {
        props.isClosed(false)
    }

    return (
        <button className={classes.button} onClick={openModalHandler}>
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
