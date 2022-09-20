import React from 'react';

const User = ({user, handleUserDetails}) => {
  return (
      <div>
        {
          <h2> name:  {user.name}</h2>

        }
        <button onClick={()=>handleUserDetails(user.name)}>UserDetails</button>
      </div>
  );
};

export default User;