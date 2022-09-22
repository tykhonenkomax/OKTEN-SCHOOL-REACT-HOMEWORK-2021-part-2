import React, {useState} from 'react';
import {useEffect} from "react";

import {Users} from "../users/Users";
import {usersServices} from "../../services";



const UserForm = () => {

  const [formState, setFormState] = useState({name: '', username: ''})
  const [users, setUsers] = useState([])


  useEffect(() => {
    usersServices.getAll().then(({data}) => setUsers(data))
  }, [])


  function onSubmit(e) {
    console.log(e.target.name.value);
    console.log(e.target.username.value);
    e.preventDefault()

    setUsers([...users,formState])

  }

  function onChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name={'name'} value={formState.name} onChange={onChange}/> Name
          <input type="text" name={'username'} value={formState.username} onChange={onChange}/> User
          <button>Put User</button>
        </form>
        <Users users={users}/>
      </div>
  );
};

export {UserForm};