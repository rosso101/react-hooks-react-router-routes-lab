
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    color: "blue",
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyles}>
        Movies
      </NavLink>
      <NavLink to="/actors" style={linkStyles}>
        Actors
      </NavLink>
      <NavLink to="/directors" style={linkStyles}>
        Directors
      </NavLink>
    </div>
  );
}

export default NavBar;
