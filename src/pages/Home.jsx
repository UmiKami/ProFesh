import React from 'react'

const Home = () => {
  return (
      <main className="container">
          <nav className="nav-bg col-12 d-flex py-3 mt-5 justify-content-evenly align-items-center">
              <div className="nav-left d-flex gap-3">
                  <button className="login-btn btn">LOG IN</button>
                  <button className="signup-btn btn">SIGN UP</button>
              </div>
              <div className="nav-center mx-5">
                  <span className="logo-pro me-3">Pro</span>
                  <span className="logo-fesh">Fesh</span>
              </div>
              <div className="nav-right d-flex gap-3">
                  <button className="btn writing-btn">
                      Select Writing Style
                  </button>
                  <button className="btn tailored-btn">Tailored Style</button>
              </div>
          </nav>
      </main>
  );
}

export default Home