import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/images/catflixlogo.png";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  // NB checks scroll and if over 100px, changes Navbar background to black
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Catflix Logo" />
      <div className="nav__links">
        <NavLink
          className={({ isActive }) =>
            "nav__link" + (isActive ? " active" : "")
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "nav__link" + (isActive ? " active" : "")
          }
          to="/add"
        >
          Add Cat
        </NavLink>
      </div>
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix User Avatar"
      />
    </div>
  );
}
