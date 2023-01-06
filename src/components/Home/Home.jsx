import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import "./Home.css";
import Topbar from "../topbar/Topbar";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import { useEffect } from "react";
import axios from "axios";




function Home() {

  return (
    <>
      <div className="posterPag">
        <div className="posterNav ">
          <div>
            <SideBar />
          </div>
          <h1 className="pageTitle text-center  fw-bold mt-4">
            <i>The Arts of The Mind</i>
          </h1>
        </div>
        <Topbar />
        <Posts />
      </div>
    </>
  );
}

export default Home;
