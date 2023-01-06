import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
import * as GrIcons from "react-icons/gr";
import { getComments as getCommentsApi, } from "../api";
import { Context } from "../../Context/Contex";
import { useContext } from "react";
import "../Post/Post.css";
import { Link } from 'react-router-dom';

export default function All() {
  const [APIData, setAPIData] = useState([])
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState('all');
  const [loading, setLoading] = useState(true);

  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
  const { user } = useContext(Context)

  useEffect(() => {

    const BLOG_API = "https://blog-9i5d.onrender.com";

    const showPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setAPIData(data.blog);
        console.log(data);
       
      } catch (error) {
        const data = 0
        setAPIData(data);
        console.log(error);
        setLoading(false);


      } finally {
        setLoading(false);
      }
    };
    showPosts();




    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, [])
    function addLikes(adde, param) {
    like = param;
    setLike(like);
    selects = false;
    setSelect(selects);
    console.log(selects);
  }


  return (
    <>
      {loading &&
        (
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
        )}
      {!loading && APIData.length >=1 &&
        < div style={{ padding: 20 }}>

          <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
            {APIData.length > 1 && (
              APIData.map(
                (value, index) => {
                  // let id = '633c2156a8a1eeccb3f5871c'
                  const { _id, image } = value;
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(image.data.data))
                  );
                  return (
                    <div key={index} className="post bg-white">
                      <img
                        className="posting"
                        // src={blogimg}
                        src={`data:image/png;base64,${base64String}`}
                        alt=""
                      />
                      <div className="postinfo">
                        <div className="post-p">
                          <div className="postcats w-100">
                            <span className="postcats">{value.category}</span>
                          </div>

                        </div>
                        <span className="posttitle fw-bold w-100">{value.title}</span>
                        <span className="posted w-100">
                          {new Date(value.updatedAt).toDateString()}
                        </span>
                        <p className="postdesc">
                          <Link to={`/post/${index}`} className="text-dark">
                            {value.story}
                          </Link>
                        </p>
                        {/* {selects == false && ( */}
                        <div className="d-flex justify-content-between w-100">
                          <strong className="">{like.length - 2} Like</strong>
                          <strong className=""><span>{backendComments.length}</span> Comment</strong>
                        </div>
                        {/* )} */}

                        <nav id="" className="like">
                          <div className="likes ">
                            <button id="changeLike" className="rounded-pill narbar">
                              <button onClick={(eve) => addLikes(eve, "❤️")}>
                                ❤️
                              </button>
                              <button onClick={(eve) => addLikes(eve, "👍")}>
                                👍
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😂")}>
                                😂
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😘")}>
                                😘
                              </button>
                              <button onClick={(eve) => addLikes(eve, "😡")}>
                                😡
                              </button>
                            </button>
                            <button className="likeB btn-likeB bg-light">
                              {like}
                            </button>
                          </div>
                          {user ?
                            <Link to={`/post/${index}`} className="btn-comment text-dark bg-light">
                              <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                              Comment
                            </Link>
                            :
                            <Link to={"/signup"} className="btn-comment text-dark bg-light">
                              <a className="singlePostIcon fa-sharp fa-solid fa-pen-to-square text-dark "></a>{" "}
                              Comment
                            </Link>
                          }
                        </nav>
                      </div>
                    </div>
                  );
                }
              )
            )}
          </Card.Group>
          
        </div>
        
      }

      {
        !loading && APIData <= 0 &&
        <div>
          <h1 className="alert alert-info p-2 ">Check your internet connection...📡</h1>
        </div>
      }
    </>
  )
}