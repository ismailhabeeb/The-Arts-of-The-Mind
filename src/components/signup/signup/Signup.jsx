import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import "./Signup.css";

function Signup() {

  const [loading, setLoading] = useState(false)
  let [email, setEmail] = useState("")
  let [usname, setUsname] = useState("")
  let [pwd, setPwd] = useState("")
  let [confirmPwd, setConfirmPwd] = useState("")
  let [password, setPassword] = useState("")
  let regexVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("")
    setUsname("")
    setPwd("")
    setConfirmPwd("")
    setPassword("")

    let checkemail = email.trim();
    let username = usname.trim();
    pwd = pwd.trim();
    confirmPwd = confirmPwd.trim();

    if (pwd == confirmPwd) {
      password = pwd;
    } else {
      return alert("Verify Password")
    }

    if (!checkemail || !username || !pwd) {
      return alert("Kindly Fill Input Fields")
    }

    if (!regexVerify.test(checkemail)) {
      return alert("Invalid Email")
    } else {
      email = checkemail;

      console.log("my mail is", email);
      console.log(username);
      console.log(password);

      const User = {
        email,
        username,
        password,
      };

      try {
        setLoading(true)
        console.log("This is the user", User);
        // const url = "https://active-info.onrender.com/signup";
        const url = "https://blog-9i5d.onrender.com/signup";
        const response = await axios.post(url, User);
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
        swal("Successfull!", "You can proceed to login!", "success");
        setEmail("")
        setUsname("")
        setPwd("")
        setConfirmPwd("")
      }

    }

  }

  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Username' onChange={(e) => setUsname(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPwd(e.target.value)} />
        <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPwd(e.target.value)} />
        <button type='submit'>
          <span hidden={!loading} className="spinner-border spinner-border-sm"></span>
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  )
}

export default Signup;
