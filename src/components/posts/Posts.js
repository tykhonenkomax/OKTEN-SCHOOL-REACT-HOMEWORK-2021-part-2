import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {GET_ALL_POSTS} from "../../redux";

import {postServices} from "../../services";
import {Post} from "../post/Post";

const Posts = () => {

  const state = useSelector(state => state.postReducer);

  console.log(state)

  const dispatch = useDispatch();

  useEffect(() => {
    postServices.getAll().then(({data}) => dispatch({type: GET_ALL_POSTS, payload: data}))
  }, [])

  return (

      <div>
        {
          state.posts.map(post => <Post key={post.id} post={post}/>)
        }
      </div>

  );
};


export {Posts};