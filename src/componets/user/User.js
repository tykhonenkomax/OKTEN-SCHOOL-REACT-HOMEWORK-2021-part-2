import React from 'react';

const User = ({user}) => {

  const {name, username} = user;

  return (

      <div>
        <div>name: {name}</div>
        <div>username: {username}</div>
      </div>
  );
};

export {User};