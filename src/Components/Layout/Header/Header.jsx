import React, { useState } from 'react';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton/HeaderCartButton';

export const Header = (props) => {

    return (
        <>
            <nav className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowModel={props.onShowModel}/>
            </nav>
            <div className={classes["main-image"]}>
                <img src="../assets/background.jpg" alt="" />
            </div>
        </>

    )
}
