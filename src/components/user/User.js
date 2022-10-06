import React from 'react';

const User = ({user}) => {


  return (

      <div className='userStyle'>
        <h3>NAME: {user.name}</h3>
      </div>

  );
};


export {User};