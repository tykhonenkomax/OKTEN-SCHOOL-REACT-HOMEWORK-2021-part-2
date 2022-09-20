import React from 'react';

const UserDetails = ({user}) => {

  console.log(user)
  return (
      <div>
        <h3> name: {user} </h3>

      </div>
  );
};

export {UserDetails};