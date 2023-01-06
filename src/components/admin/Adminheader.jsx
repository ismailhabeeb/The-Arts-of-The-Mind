import React from "react";
import "../admin/adminGeneral.css";
import { useState } from "react";
import { Link, Route, Routes,  } from "react-router-dom";
import ManagePost from "./Admin-post/ManagePost";
import AddPost from "./Admin-post/AddPost";
import AddTopic from "./Admin-Topic/AddTopic";
import ManageTopic from "./Admin-Topic/ManageTopic";
import AdminSidebar from "./AdminSidebar";
import AddUser from "./Admin-User/AddUser";
import ManageUser from "./Admin-User/ManageUser"
import AdminSidepage from "./AdminSidepage";

function  Adminheader() {

  

    const [post, setPost] = useState();

    useState(()=>{
        fetch ("https://blog-9i5d.onrender.com/blog-post")
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            console.log(data)
        })

    },[])


    return ( 
        <>
        <nav className="navbar " id="header" >
        <div className="container-fluid">
         <i >The Arts of The Mind</i>
          
        </div>
        </nav>

        <div className="adminWrapper">

        <div className="side-bar">
        <AdminSidebar />
        </div>

        <div className="side-two">
            <AdminSidepage />
        </div>

        </div>
        </>
     );
}

export default Adminheader ;