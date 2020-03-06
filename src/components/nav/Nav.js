import React from "react";
import { withRouter, Link } from "react-router-dom";
import './Nav.css'

const NavBar = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
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
            <Link className="nav-link" to="/welcome">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
