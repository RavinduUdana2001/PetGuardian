import React from 'react';
import './HeaderContent.css'; // Import the CSS file

function HeaderContent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#f8d254', height: 'auto' }}>
        <div className="container">
          <a className="navbar-brand text-start" href="#">Navbar scroll</a>
          <button className="navbar-toggler text-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse scrollable-navbar" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0" style={{ fontSize: '17px' }}>
              <li className="nav-item">
                <a className="nav-link ms-0 ms-lg-5 fw-semi-bold" href="#action1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-0 ms-lg-5 fw-semi-bold" href="#action2">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-0 ms-lg-5 fw-semi-bold" href="#action2">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-0 ms-lg-5 fw-semi-bold" href="#action2">Pet Training</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-0 ms-lg-5 fw-semi-bold" href="#action2">Channel Your Pet</a>
              </li>
              <li className="nav-item dropdown d-none d-lg-block">
                <a className="nav-link dropdown-toggle ms-0 ms-lg-5 fw-semi-bold" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#action3">Action</a></li>
                  <li><a className="dropdown-item" href="#action4">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#action5">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-primary d-none d-lg-block ms-0 ms-lg-5">Login | SignUp</button>
          </div>
        </div>

        <div className='ms-3 mt-3 d-lg-none'>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="#action3">Action</a></li>
              <li><a className="dropdown-item" href="#action4">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#action5">Something else here</a></li>
            </ul>
          </div>
        </div>
        <button className="btn btn-primary d-flex d-lg-none me-2 mt-3">Login | SignUp</button>
      </nav>

   
    </>
  );
}

export default HeaderContent;
