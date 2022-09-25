import React from 'react';
import {Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

let navigate = useNavigate();

  return (

      <div>
        {
         // <Link to={`posts/${post.id}`}><div>№ {post.id}: {post.title}</div></Link>
          <button onClick={()=>{
            navigate(post.id.toString(), {state:{...post}})
          }

          }> <div>№ {post.id}: {post.title}</div> </button>
        }
      </div>
  );
};

export {Post};