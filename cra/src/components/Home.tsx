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
          <br />
          <br />
          Check out our latest app!
        </p>
        <div>
          <button className="button">Heart 2 Heart</button>
        </div>
      </div>
      <div className="iPhoneBox">
        <img className="iPhone" src={allImages.Iphone} />
      </div>
    </div>
  );
}
