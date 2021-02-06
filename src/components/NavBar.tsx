import React from "react";
import { Corgi } from "../images";
import "./components.css";

export default function NavBar() {
  return (
    <div className="navBox">
      <ul className="navList">
        {/* <li>
          <a href="/about">About</a>
        </li> */}
        <li>
          <a href="/team">Our Team</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <div>
            <a href="/">Thyck Corgis</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
