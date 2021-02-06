import React from "react";
import "./components.css";
import NavBar from "./NavBar";
import allImages from "../images/index";

export default function Home() {
  return (
    <div className="homeScreen">
      <div className="homeBox">
        <p className="title">
          HelloWo rld?
          <br />
          No.
          <br />
          Hello Thyck.
        </p>
        <p className="body">
          Thyck Corgis are back and better than ever, this time, in the form of
          a website. We make projects, we get t h y c k.
        </p>
      </div>
      <div className="homeBox">
        <img className="iPhone" src={allImages.Iphone} />
      </div>
    </div>
  );
}
