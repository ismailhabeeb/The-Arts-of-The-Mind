import React from "react";
import "./SinglePosts.css";
import Comments from "../Comments/Comments";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import { Context } from "../../Context/Contex";
import * as FiIcons from "react-icons/fi";
import { useContext } from "react";

function SinglePosts() {
  const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const {user} = useContext(Context)

  const BLOG_API = "https://blog-9i5d.onrender.com";
  // const AL_PI =  "https://blog-9i5d.onrender.com/blog-post"
  const [post, setPost] = useState([]);
  // const [story, setStory] = useState("");
  // const [title, setTitle] = useState("");
  // const [updateMode, setupdateMode] = useState(false);

  const { id } = useParams();
  const [loadin, setLoadin] = useState(true);

  useEffect(() => {
    // console.log(id)
    const getPosts = async () => {
      try {
        setLoadin(true);

        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        let main = data.blog[`${id}`];
        post.push(main);
        setPost(post);
        console.log(data);
        // console.log(data.blog[`${id}`]);
      } catch (error) {
        // const data = 0
        // setPost(data);
        // console.log(error);
        // setLoadin(false)
      } finally {
        setLoadin(false);
      }
    };
    getPosts();

    
  }, [id]);
  


  const handleDelete = async () => {
    try {
      await axios.delete(`${BLOG_API}/blog-post/${post[_id]}`,
     
      {
       data: { username: user.username },
     });
     window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }


  const handleUpdate = async () => {
    try {
      await axios.put(`${BLOG_API}/blog-post/${post[_id]}`, {
        username: user.username,
        title,
        story,
       
      });
      setupdateMode(false)
    } catch (error) {
      
    }
  }

  // console.log(user.user.username);

  return (
    <div>
      {loadin && (
        <div className="justify-content-center not">
          <span className="spinner-grow text-success "></span>
          <span className="spinner-grow text-warning"></span>
          <span className="spinner-grow text-primary"></span>
        </div>
      )}
      {!loadin &&
        post.length > 0 &&
        post.map((value, index) => {
          console.log(value.author);
          console.log(value.category);
          
           const { _id, image } = value;
           const base64String = btoa(
             String.fromCharCode(...new Uint8Array(image.data.data))
           );
          return (
            <div
              key={index}
              className="singlePosts d-flex justify-content-center"
            >
              <div className="singlePostRapper">
                <img
                  src={`data:image/png;base64,${base64String}`}
                  className="singlePostImage d-flex"
                  alt=""
                />
                <h1 className="singlePostTitle text-center">
                  {value.title}
                  
                 
                  <div className="singlePostEdit">
        
                  <div className="singlePostIcon">
                  <FiIcons.FiEdit onClick={() => setupdateMode(true)}/>
                    <FaIcons.FaRegTrashAlt onClick={handleDelete}/>
                  </div>
                  </div>
                  
                </h1>
                <div className="singlePostInfo">
                  <span className="singlePostAuthor">
                    By <b>{value.author}</b>
                  </span>
                  <span className="singlePostDate">
                    {new Date(value.updatedAt).toDateString()}
                  </span>
                </div>

                <p className="singlePostDesc">{value.story}</p>
                <br />
                <hr />
                {user ? 
                <Comments
                  commentsUrl="http://127.0.0.1:5173/"
                  currentUserId="1"
                />:
                  null} 
              </div>
              <hr />
              {!loadin && post.length <= 0 && (
                <div>
                  <h1 className="alert alert-info p-2 ">Check your internet connection...📡</h1>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default SinglePosts;
