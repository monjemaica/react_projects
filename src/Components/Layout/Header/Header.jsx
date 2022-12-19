import React from 'react';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton/HeaderCartButton/HeaderCartButton';

export const Header = () => {
    return (
        <>
            <nav className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </nav>
            <div className={classes["main-image"]}>
                <img src="../assets/background.jpg" alt="" />
            </div>
        </>

    )
}