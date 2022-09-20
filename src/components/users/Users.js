import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/user.axios.services";
import User from "../user/User";
import {UserDetails} from "../user.details";



const Users = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {

    userServices.getAll().then(value => setUsers(value.data))

  }, [])

  const handleUserDetails = (id) => {
    setUser(id);
  }


  return (
      <div>
        {
            user && <UserDetails key={user.id} user={user}/>
        }
        <hr/>
        {
          users.map(user => <User key={user.id} user={user} handleUserDetails={handleUserDetails}/>)
        }
      </div>

  )
      ;
};

export {Users};