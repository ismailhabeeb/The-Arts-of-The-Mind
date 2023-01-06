import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import axios from "axios";
import { useEffect } from "react";
import * as GrIcons from "react-icons/gr";
import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import Topbar from "../topbar/Topbar";
import { getComments as getCommentsApi, } from "../api";
import { Context } from "../../Context/Contex";
import { useContext } from "react";

function Post() {
  // let [like, setLike] = useState("🤍");
  // let [selects, setSelect] = useState(true);
  // const [backendComments, setBackendComments] = useState([]);
  // const { user } = useContext(Context)


  // const [post, setPost] = useState({});
  // const [loading, setLoading] = useState(true);

  // const BLOG_API = "https://blog-9i5d.onrender.com";

  // useEffect(() => {
  //   const showPosts = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(`${BLOG_API}/blog-post`);
  //       setPost(data.blog);
  //       console.log(data);
  //     } catch (error) {
  //       const data = 0
  //       setPost(data);
  //       console.log(error);
  //       setLoading(false);


  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   showPosts();

  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);


  // function addLikes(adde, param) {
  //   like = param;
  //   setLike(like);
  //   selects = false;
  //   setSelect(selects);
  //   console.log(selects);
  // }


  return (

    <div>

      <div>
        <div className="display-pos d-flex ">
          <div className="sideba"></div>

          <div className="display-post -flex justify-content-center">
            <Outlet />

            {/* {loading && (
              <div className="d-flex loading-post d-block w-100 justify-content-center bg-danker">
                <div className="d-flex loading-post w-50">
                  <div className="spinner-grow m-3 text-success "></div>
                  <div className="spinner-grow m-3 text-warning"></div>
                  <div className="spinner-grow m-3 text-primary"></div>
                </div>
                <div className="d-flex loading-post w-50">
                  <div className="spinner-grow m-3 text-success "></div>
                  <div className="spinner-grow m-3 text-warning"></div>
                  <div className="spinner-grow m-3 text-primary"></div>
                </div>
              </div>
            )} */}
          </div>

          <div className="sideba" ></div>
          </div>


      </div>
    </div>
  );
}

export default Post;