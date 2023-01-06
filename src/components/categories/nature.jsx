import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
import * as GrIcons from "react-icons/gr";
import Topbar from "../topbar/Topbar";
import { getComments as getCommentsApi, } from "../api";
import { Context } from "../../Context/Contex";
import { useContext } from "react";
import "../Post/Post.css";
import { Link } from 'react-router-dom';

export default function Nature() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('nature');
  const [loading, setLoading] = useState(true);

  let [like, setLike] = useState("🤍");
  let [selects, setSelect] = useState(true);
  const [backendComments, setBackendComments] = useState([]);
  const { user } = useContext(Context)

  const [post, setPost] = useState({});


  useEffect(() => {

    const BLOG_API = "https://blog-9i5d.onrender.com";

    const showPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BLOG_API}/blog-post`);
        setAPIData(data.blog);
        console.log(data);
        if (searchInput !== '') {
          const filteredData = data.blog.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
          console.log(filteredResults)
        }
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
      {!loading && APIData.length > 0  &&
        < div style={{ padding: 20 }}>

          <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
            {filteredResults.length > 1 ? (
              filteredResults.map(
                (value, index) => {
                  const { _id, image } = value;
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(image.data.data))
                  );
                  return (
                    <div key={index} className="post bg-white">
                      <img
                        className="posting"
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
                        <div className="d-flex justify-content-between w-100">
                          <strong className="">{like.length - 2} Like</strong>
                          <strong className=""><span>{backendComments.length}</span> Comment</strong>
                        </div>

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
            ) : (
              <div className='alert alert-info w-100 mx-auto'>
                <h3>
                  NO POST FOUND
                </h3>
                <p className="text-dark bg-light post nopost">
                  {user ?
                    <Link className="text-dark" to={"/AddPost"}>
                      YOU CAN ADD TO POST
                    </Link>
                    :
                    <Link className="text-dark text-bold" to={"/signup"} >
                      YOU CAN ADD TO POST
                    </Link>
                  }
                </p>
              </div>
            )
            }
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