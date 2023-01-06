
import "./Signup.css";
import { useState } from "react";

const Signup = () => {
  let data = [];

  const [lastName, setLastName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState(null);


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("")
    setEmail("")

    if (!lastName || !firstName || !email || !isValidEmail(e.target.value)) {
      setFlag(true);
      setError('Email is invalid');

    } else {
      setFlag(false);
      localStorage.setItem("LastName", JSON.stringify(lastName));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("FirstName", JSON.stringify(firstName));
      setError(null);
      console.log("saved to local storage");
      setLogin(!login);
    }

    // if (!isValidEmail(e.target.value)) {
    //   setError('Email is invalid');
    // } else {
    //   setError(null);
    // }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="demo-wrap">
      <div className="demo-content d-flex justify-content-center">
        {login ? (
          <form className="formi m-5" onSubmit={handleSubmit}>
            <h2 className="text-align-center mb-4 text-black text-center">
              Sign Up{" "}
            </h2>

            <input
              type="text"
              className="form-control mb-2 "
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2 "
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              name=""
              value={email}
              className="form-control mb-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <div className="d-flex justify-content-center">
              <button type="submit" className=" btn btn-primary mb-3 ">
                Sign Up
              </button>
            </div>

            <p
              className="showlogin text-dark text-center"
              onClick={handleClick}
            >
              Already registered {""} Log In ?
           </p>

             {flag && (
              <div className="alert alert-danger" role={"alert"}>
                please fill every box
              </div>
            )}

{/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}
          </form>
        ) : (
        //   <Login />
        <div className="login">
            <h3>you can now login</h3>
        </div>
        )}
      </div>
    </div>

    
  );
};

export default Signup;
