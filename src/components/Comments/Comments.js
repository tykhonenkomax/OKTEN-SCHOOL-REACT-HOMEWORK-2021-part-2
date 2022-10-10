import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentAxiosServices} from "../../services";
import {commentAction} from "../../redux";
import {Comment} from "../Comment";

const Comments = () => {
const dispatch = useDispatch();
const {comment} = useSelector(sate=>sate.commentReducer);
useEffect(()=>{
  commentAxiosServices.getAll().then(({data})=>dispatch(commentAction.getAll(data)))
},[])
  return (

      <div>
        {
          comment.map(comment=><Comment key={comment.id} comment={comment}/>)
        }
      </div>

  );
};


export {Comments};