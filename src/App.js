import React, { useState } from 'react';
import {AddUser} from './Components/User/AddUser/AddUser';
import { UsersList } from './Components/User/UsersList/UsersList';

function App() {
  const data = [
    {id: 1, un_fld:"Jem", age_fld:28},
    {id: 2, un_fld:"Alex", age_fld:23},
    {id: 3, un_fld:"Mae", age_fld:22},
  ]
  const [userData, setuserData] = useState(data)

  const addUserHandler = (input) => {
    setuserData( prevData => {
      const updatedUserData = [...prevData];
      updatedUserData.unshift({id: Math.random(), un_fld:input.un_fld, age_fld:input.age_fld})
      return updatedUserData
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList data = {userData} />
    </div>
  );
}

export default App;
