import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {postAction} from "../../redux";
import {Post} from "../Post";

const Posts = () => {

  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.postReducer);

  useEffect(() => {
    // postAxiosServices.getAll().then(({data}) => dispatch(postAction.getAll(data)))
    dispatch(postAction.getAll())
  }, [])

  return (

      <div>
        {
          posts.map(post => <Post key={post.id} post={post}/>)
        }
      </div>

  );
};


export {Posts};