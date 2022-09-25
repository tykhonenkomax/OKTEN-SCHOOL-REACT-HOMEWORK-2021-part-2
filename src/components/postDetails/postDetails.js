import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const PostDetails = () => {

  const {state} = useLocation();
const {id}=useParams();

  return (
      <div>
        {
          JSON.stringify(state)
        }
      </div>
  );
};

export {PostDetails};