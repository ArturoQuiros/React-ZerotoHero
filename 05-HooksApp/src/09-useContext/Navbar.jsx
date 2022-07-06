import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""}`;
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return `nav-link ${isActive ? "active" : ""}`;
            }}
          >
            Log In
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
