import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark py-3">
    <div className="nav-container">
      <div className="top-header">
        <Link to="/">
          <h1 className="p-3">MovieDB</h1>
        </Link>
        <ul className="nav justify-content-center nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Genre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Country</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Top OMDB</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Requested</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">A-Z List</a>
          </li>
        </ul>
        <div className="logs">
          <a className="mx-3" href="/">Log In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
