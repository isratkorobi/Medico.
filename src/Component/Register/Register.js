import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.lenght < 6) {
      setError("password Must be at least 6 characters long.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

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
    <div className="text-center">
      <div className="w-25 m-auto">
        <h3 className="my-5">Register: Create Account</h3>

        <form onSubmit={handleRegistration}>
          <div class="mb-3">
            <input     
              type="email"
              onBlur={handleEmailChange}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              onBlur={handlePasswordChange}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <p className="row mb-3 text-danger ">{error}</p>
          <button
            onClick={handleRegistration}
            type="submit"
            class="btn btn-primary me-3 mb-2"
          >
            Register Now
          </button>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            class="btn btn-success mb-2"
          >
            Register with Google
          </button>
        </form>
        <span>
          Already have an account please <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};
// onClick={handleRegistration}
export default Register;
