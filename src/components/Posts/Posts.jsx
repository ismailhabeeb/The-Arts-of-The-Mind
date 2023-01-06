import React from 'react'
import { Outlet } from 'react-router';
// import "./Post.css"
import Post from '../Post/Post'

function Posts() {
  // console.log(post)
  
  return (
    <div className='posts'>
      
    <Post/>
    {/* <Outlet/> */}
    </div>
  );
}

export default Posts