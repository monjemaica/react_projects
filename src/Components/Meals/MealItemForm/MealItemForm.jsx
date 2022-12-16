import React from 'react'
import { Input } from '../../UI/Input/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <Input />
        <button>+ Add</button>
    </form>
  )
}
