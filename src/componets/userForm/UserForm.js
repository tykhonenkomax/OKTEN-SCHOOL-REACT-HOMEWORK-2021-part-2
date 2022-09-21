import React, {useState} from 'react';
import {Users} from "../users/Users";


const UserForm = () => {

  const [formState, setFormState] = useState({name: '', username: ''})

  function onSubmit(e) {
    console.log(e.target.name.value);
    console.log(e.target.username.value);
    e.preventDefault()
  }


  function onChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }



  return (

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name={'name'} value={formState.name} onChange={onChange}/> Name
          <input type="text" name={'username'} value={formState.username} onChange={onChange}/> User
          <button>submit</button>
        </form>
        <Users/>
      </div>
  );
};

export {UserForm};