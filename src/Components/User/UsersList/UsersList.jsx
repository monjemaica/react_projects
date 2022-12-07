import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './UsersList.module.css';
import { UsersItem } from '../UsersItem/UsersItem';

export const UsersList = (props) => {
  return (
    <Card className={classes.users}>
       <UsersItem data={props.data}/>
    </Card>
  )
}
