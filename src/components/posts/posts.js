import React, {useEffect, useState} from 'react';

import {postsServices} from "../../services/posts.axios.services";
import {Post} from "../post/post";
import {useParams} from "react-router-dom";


const Posts = () => {

  const {postId} = useParams()


  const [post, setPost] = useState(null)



  useEffect(() => {
    postsServices.getByID(postId).then(({data})=>setPost(data))
  }, [postId])



  return (

      <div>
        {
          post && (<Post post={post}/> )
        }
      </div>

  );
};

export {Posts};