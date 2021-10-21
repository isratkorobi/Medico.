
import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const {user, logOut}=useAuth();
  return (
    <div>
      <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                 <h3>Medico.</h3>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="/home">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about">
                        About Us
                      </a>
                    </li> 
                    <li class="nav-item">
                      <a class="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                   {user.email && <span className="pt-2">Hello: {user.displayName}</span>}
                   {user?.email? <button onClick={logOut} class="btn btn-primary">LogOut</button>:
                      <li class="nav-item">
                      <a class="nav-link" href="/login">
                       Login
                      </a>
                    </li>
                   }
                    {/* <h4>Signed in as:<a href="#login">{user?.displayName}</a></h4> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
