import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postServices} from "../../services";

const PostDetails = () => {

  const {state} = useLocation();

  const [post, setPost] = useState(state);

  const {id} = useParams();

  useEffect(() => {
    if (!state) {
      postServices.getAll(id).then(({data}) => setPost(data))
    } else {
      setPost(state)
    }
  }, [id, state])

  return (

      <div>
        {
          post && <h1>{JSON.stringify(post)}</h1>
        }
        <hr/>
      </div>

  );
};


export {PostDetails};