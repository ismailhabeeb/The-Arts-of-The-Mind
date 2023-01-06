import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes
} from "react-router-dom";
import App from './App'
import './index.css'
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/profile';
import SinglePosts from './components/Single/SinglePosts';
import AddPost from './components/admin/Admin-post/AddPost';
import AddTopic from './components/admin/Admin-Topic/AddTopic';
import LoginSignupContainer from './components/signup/LoginSignupContainer/LoginSignupContainer';
import Adminheader from './components/admin/Adminheader';
import { Context, ContextProvider } from './Context/Contex';

import Entertainment from './components/categories/entertainment';
import All from './components/categories/all';
import Sport from './components/categories/sport'
import Tech from './components/categories/tech'
import Nature from './components/categories/nature'

const router = createBrowserRouter([

  {
    path: "/", element: <App />,
    children: [
      {
        path: "signup", element: <LoginSignupContainer />

      },
      {
        path: "/", element: <Home />,
        children: [
          { path: "", element: <All /> },
          { path: "tech", element: <Tech /> },
          { path: "sport", element: <Sport /> },
          { path: "entertainment", element: <Entertainment /> },
          { path: "nature", element: <Nature /> },
        ]

      },
      {
        path: "profile", element: <Profile />

      },

      {
        path: "post/:id", element: <SinglePosts />

      },
      {
        path: "addPost", element: <Adminheader />

      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>

)
