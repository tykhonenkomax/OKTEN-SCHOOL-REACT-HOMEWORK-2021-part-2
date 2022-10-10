import React from 'react';
import {useDispatch} from "react-redux";
import {postAction} from "../../redux";

const Post = ({post}) => {
const dispatch = useDispatch();

  return (

      <div>
        title:{post.title}
        <button onClick={()=>dispatch(postAction.getCurrentPost(post))}>select</button>
      </div>

  );
};

export {
  Post
}