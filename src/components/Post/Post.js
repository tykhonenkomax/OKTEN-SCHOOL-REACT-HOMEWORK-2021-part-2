import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

const navigate = useNavigate();

  return (
<div>

  <h3>
    post: {post.title}
  </h3>

  <button onClick={()=>navigate(`${post.id}`, {state:{...post}})}>PostDetails</button>

</div>


  );
};


export {Post};