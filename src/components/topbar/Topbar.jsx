
import * as GrIcons from "react-icons/gr";
import blogimg from './240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";
import { useEffect } from "react";


function Topbar() {
  return (
    <div className=" ">
      <div className="topbar">
        <div className=" div nav-pills">
          <div className="sectB">
            <Link className="btn item text-light" to={"/"}>All</Link>
            <Link className="btn item text-light"
              to={"/tech"}>Tech</Link>
            <Link className="btn item text-light"
              to={"/sport"}>Sport</Link>
            <Link className="btn item text-light"
              to={"/entertainment"}>Entertainment</Link>
            <Link className="btn item text-light"
              to={"/nature"}>Nature</Link>
          </div>
        </div>
      </div>
      <div className="d-flex p-3 kk">

      </div>
    </div>
  );
}
export default Topbar;