import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/services"
        className={
          window.location.pathname === "/services"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Services
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/usage"
        className={
          window.location.pathname === "/usage" ? "nav-link active" : "nav-link"
        }
      >
        Usage
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/output"
        className={
          window.location.pathname === "/output"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Output
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/monthly"
        className={
          window.location.pathname === "/monthly"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Monthly
      </Link>
    </li>
  </ul>
);

export default NavTabs;
