import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
      <main className="pt-4 pe-4 auth-bg">
          <div className="container">
              <div className="home-btn" >
                  <Link to={"/"}>
                      <FontAwesomeIcon icon={faHouse} style={{ color: "white" }} />
                  </Link>
              </div>
              <form className="d-flex flex-column align-items-center">
                  <h1 className="text-center">
                      <span className="welcome">Welcome to</span> <br />{" "}
                      <span className="logo-pro me-3">Pro</span>
                      <span className="logo-fesh">Fesh</span>
                  </h1>

                  <div className="mb-3">
                      <label
                          for="firstName"
                          className="form-label form-label-1"
                      >
                          First Name
                      </label>
                      <input
                          type="text"
                          className="form-control form-control-1"
                          id="firstName"
                          placeholder="Joe"
                      />
                  </div>
                  <div className="mb-3">
                      <label for="lastName" className="form-label form-label-1">
                          Last Name
                      </label>
                      <input
                          type="text"
                          className="form-control form-control-1"
                          id="lastName"
                          placeholder="Doe"
                      />
                  </div>
                  <div className="mb-3">
                      <label for="email" className="form-label form-label-1">
                          Email address
                      </label>
                      <input
                          type="email"
                          className="form-control form-control-1"
                          id="email"
                          placeholder="name@example.com"
                      />
                  </div>
                  <div className="mb-3">
                      <label for="password" className="form-label form-label-1">
                          Password
                      </label>
                      <input
                          type="password"
                          className="form-control form-control-1"
                          id="password"
                          placeholder="Password here"
                      />
                      <p className="text-end text-white mt-2">
                          Already have an account?{" "}
                          <Link to={"/login"} className="text-info-1 text-decoration-none fw-bold">Log In</Link>
                      </p>
                  </div>

                  <div className="text-center">
                      <input
                          type="submit"
                          value="SIGN UP"
                          className="btn signup-btn signup-btn-1"
                      />
                  </div>
              </form>
          </div>
      </main>
  );
}

export default Signup