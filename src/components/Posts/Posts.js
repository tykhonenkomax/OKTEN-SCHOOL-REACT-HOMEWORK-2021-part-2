import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'
import {postServices} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {

const [posts,setPosts]= useState([])


  useEffect(()=>{
    postServices.getAll().then(({data})=>setPosts(data))
  },[])

  return (
<div>
  <Outlet/>
  <div>
    {posts.map(post=><Post key={post.id} post={post}/>)}
  </div>
</div>


  );
};


export {Posts};