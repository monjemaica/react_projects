import React from 'react'
import classes from './Input.module.css'

export const Input = () => {
  return (
    <div className={classes.input}>
        <label>Amount</label>
        <input type="number" />
    </div>
  )
}
