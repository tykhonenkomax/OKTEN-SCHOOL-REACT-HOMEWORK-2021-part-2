import React, {useEffect, useState} from 'react';
import {getUsers, getUsersId} from "../services";
import User from "./user";


const Users = () => {


  let [users, setUsers] = useState([])
  let [user, setUser] = useState(null)

  useEffect(() => {
    getUsers().then(value => setUsers(value.data));

  }, [])

  const userSearch = (id) => {
    getUsersId(id).then(value => setUser(value.data))
  }


  return (
  <div>
    <div className='nameIdStyle'>{user?.name}</div>
    <hr/>

    {
      users.map((user) => <User key={user.id} user={user} userSearch={userSearch}/>)
    }
  </div>
)
  ;
};

export default Users;