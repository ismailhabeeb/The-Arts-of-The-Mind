
import "./App.css";

// import Topbar from "./components/topbar/Topbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SinglePosts from "./components/Single/SinglePosts";
import Comments from "./components/Comments/Comments";
import Profile from "./components/profile/profile";
import Adminheader from "./components/admin/Adminheader";
import AddPost from "./components/admin/Admin-post/AddPost";
import LoginSignupContainer from "./components/signup/LoginSignupContainer/LoginSignupContainer";
import Login from "./components/signup/Login/Login";
import Signup from "./components/signup/signup/Signup";
import { Routes, Route } from "react-router";
import { Outlet } from "react-router";
import { useContext } from "react";
import { Context, ContextProvider } from './Context/Contex';


function App() {

  return (

    <main>
      <Outlet />
      {/* main */}
      {/* <Home/> */}

      <Footer />

    </main>
  )

}

export default App;
