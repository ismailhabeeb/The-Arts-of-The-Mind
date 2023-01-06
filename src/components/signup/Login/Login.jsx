// import React, { useState } from 'react'
// import axios from "axios"
// import { useNavigate } from "react-router-dom";

// import "./Login.css"

// function Login() {

//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   const HandleLogin = async(e) => {
//   e.preventDefault();

//     email = email.trim();
//     password = password.trim();

//     if (!email || !password) {
//         return alert("Fill In The Empty Fields")
//     } else {
//         const User = {
//             email,
//             password,
//         }

//         console.log(User);
//         try {
//           setLoading(true);
//             // const url = "https://active-info.onrender.com/login";
//             const url = "https://blog-9i5d.onrender.com/login";
//             const response = await axios.post(url, User);
//             console.log(response);
//             console.log(response.data);
//             console.log(response.data.message);
//             navigate('/')

//         } catch (error) {
//             console.log(error);
//             console.log(error.response.data);
//             console.log(error.response.data.message);

//         } finally{
//           setLoading(false);
//         }
//     }

//   }

//   return (
//     <div className='login'>
//        <h1>Login</h1>
//        <form onSubmit={HandleLogin}>
//         <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
//         <button type='submit'>
//         <span hidden={!loading} className="spinner-border spinner-border-sm"></span>
//         <span> Login </span>
//         </button>
//        </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../../Context/Contex";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (event) => {
    event.preventDefault();
    // userRef = userRef.trim()
    // passwordRef = passwordRef.trim()


    dispatch({ type: "LOGIN_START" });
    

    if (!userRef || !passwordRef) {
              return alert("Fill In The Empty Fields")
          } else {
            const User = {
              username: userRef.current.value,
              password: passwordRef.current.value,
            };
             

    console.log(User);
   
    try {
      setLoading(true);

      const url = "https://blog-9i5d.onrender.com/login";
      const response = await axios.post(url, User);
      dispatch({ type: "LOGIN_SUCCESSFUL", payload: response.data });
      console.log(response);

      console.log(response.data);
      console.log(response.data.message);
       navigate('/')

    } catch (error) {
      console.log(error);

      dispatch({ type: "LOGIN_FAILURE" });
    } finally {
      setLoading(false);
    }
  }
  };


  return (


    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">
          <span
            hidden={!loading}
            className="spinner-border spinner-border-sm"
          ></span>
          <span> Login </span>


        </button>
      </form>
    </div>
  );
}

export default Login;
