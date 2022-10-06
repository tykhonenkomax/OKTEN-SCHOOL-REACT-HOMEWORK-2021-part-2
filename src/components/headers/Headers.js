import React from 'react';

import {Link} from "react-router-dom";

import css from '../../App.css'

const Headers = () => {


  return (

      <div className='menuStyle'>
       <div><Link to={'users'}>Users</Link></div>
        <div><Link to={'posts'}>Posts</Link></div>
        <div><Link to={'comments'}>Comments</Link></div>
      </div>

  );
};


export {Headers};