 import React from "react";
import useAuth from "../../../hooks/useAuth";
import {Link, useLocation, useHistory } from "react-router-dom";
import {getAuth } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const auth = getAuth();
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  // console.log('came from',location.state?.from);

  const handleGoogleLogin = () => {
    signInGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login">
      
      <div>
            <h3 className="my-4 text-center">Please Login</h3>
            <form>
               <input className="form-control" type="email" name="" id="" placeholder="Your Email" /><br/>
               <input className="form-control" type="password" name="" id="" placeholder="Your Password" /><br/>
            <input className="btn btn-primary" type="submit" value="Login"/>
            
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-success my-3">Google Sign IN</button>
            <p>new to website?<Link to="/register">Create Account</Link></p>            
        </div>

      
    </div>
  );
}
export default Login;
