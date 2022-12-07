import React, { useState } from 'react'
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './AddUser.module.css';
import { ErrorModal } from '../../Modal/Error/ErrorModal';

export const AddUser = (props) => {
  const [un_fld, setUn_fld] = useState('');
  const [age_fld, setAge_fld] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault();
    const data = {
      un_fld,
      age_fld
    }

    if(data.un_fld.trim().length === 0 || data.age_fld.trim().length === 0){
      setMessage("Please enter a valid name and age (non-empty values.)")
      setIsValid(false);
    }else if(parseInt(data.age_fld) < 0){
      setMessage("Please enter a valid age (>0).")
      setIsValid(false);
    }else{
      props.onAddUser(data);
      setIsValid(true);
    }
  }
  const onUserName = (e) => {
    setUn_fld(e.target.value);
  }
  const onAge = (e) => {
    setAge_fld(e.target.value);
  }



  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Add User</label>
          <input id='un_fld' type="text" onChange={onUserName} />
          <label>Age(Years)</label>
          <input id='age_fld' type="number" onChange={onAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
     {!isValid && <ErrorModal msg={message} onClose={setIsValid}/>}
    </>
  )
}
