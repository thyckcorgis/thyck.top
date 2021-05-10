import React from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";

export default function AboutPage() {
  return (
    <Layout
      title="Our Corigin Story"
      description="Meet the people behind Thyck Corgis."
    >
      <div className="container">
        <p className="title slide-in-left"> Through Thyck and Thin</p>
        <div
          className="headerLine centered slide-in-left"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="text-box centered">
          <p className="body fadeIn" style={{ animationDelay: "1s" }}>
            As a team of programmers, but first, friends, our team was not
            formed without humble beginnings. Founded in October, 2020, Thyck
            Corgis entered their very first programming competition. Little did
            they know, their love for programming would grow into something
            thycker. Join Thyck Corgis in our journey of making software
            projects.
          </p>
        </div>
        <div className="fadeIn" style={{ animationDelay: "1.5s" }}>
          <img className="img-rectangle centered" src="/img/uaec.jpg" />
        </div>
      </div>
    </Layout>
  );
}
