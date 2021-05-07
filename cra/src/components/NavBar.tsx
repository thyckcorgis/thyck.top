import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import allImages from "../images/index";

export default function NavBar() {
  return (
    <div className="navBox">
      <nav className="navList">
        {/* <Link to="/about" className="nav-link">About</Link> */}
        <Link to="/team" className="nav-link">
          Our Team
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </nav>

      <div className="logoBox">
        <Link to="/" className="logo">
          <img src={allImages.Corgi} className="corgi" />
          THYCK CORGIS
        </Link>
      </div>
    </div>
  );
}
