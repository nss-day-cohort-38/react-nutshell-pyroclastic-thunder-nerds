import React from "react";
import { withRouter, Link } from "react-router-dom";
import './Nav.css'

const NavBar = props => {
  const activeUser = sessionStorage.getItem("Active Id")
  const clearUser = () => {
    sessionStorage.clear();
    }
  
  if (activeUser === null) {
    return (
      <header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    );
  } else {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/articles">
              Articles
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>
          <li>
            <Link className="nav-link" onClick={clearUser} to="/ ">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  }
};

export default withRouter(NavBar);
