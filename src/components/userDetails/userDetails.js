import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

  const location = useLocation();

  let {state:user}=location

  return (
      <div>
        {
         JSON.stringify(user)
        }
      </div>
  );
};

export {UserDetails};