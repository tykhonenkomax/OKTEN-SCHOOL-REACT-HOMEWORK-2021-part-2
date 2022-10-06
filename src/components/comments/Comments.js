import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {GET_ALL_COMMENTS} from "../../redux";

import {commentServices} from "../../services";
import {Comment} from "../comment/Comment";


const Comments = () => {

  const state = useSelector(state => state.commentReducer);

  console.log(state)

  const dispatch = useDispatch();

  useEffect(() => {
    commentServices.getAll().then(({data}) =>
        dispatch({type: GET_ALL_COMMENTS, payload: data}))
  }, [])

  return (

      <div>
        {
          state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
        }
      </div>

  );
};


export {Comments};