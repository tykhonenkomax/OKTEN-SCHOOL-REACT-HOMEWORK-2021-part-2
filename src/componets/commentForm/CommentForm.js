import React, {useEffect, useState} from 'react';

import {Comments} from "../comments/Comments";
import {commentsServices} from "../../services";

const CommentForm = () => {

  const [formState, setFormState] = useState({name: '', email: ''})
  const [comments, setComments] = useState([])


  useEffect(() => {
    commentsServices.getAll().then(({data}) => setComments(data))
  }, [])

  function onSubmit(e) {
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    e.preventDefault()
    setComments([...comments, formState])
  }

  function onChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name={'name'} value={formState.name} onChange={onChange}/> Name
          <input type="email" name={'email'} value={formState.email} onChange={onChange}/> Email
          <button>Put Comment</button>
        </form>
        <Comments comments={comments} key={comments.id}/>
      </div>
  );
};

export {CommentForm};