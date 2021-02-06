import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

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
        <Link to="/" className="nav-link">
          Thyck Corgis
        </Link>
      </nav>
    </div>
  );
}
