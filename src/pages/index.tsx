import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function () {
  return (
    <Layout description="Thyck Corgis' Official Website">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <p className="title text--left slide-in-left">
            <span>Hell</span>
            <span className="owo">oWo</span>
            <span>rld?</span>
            <br />
            No.
            <br />
            Hello Thyck.
          </p>
          <div
            className="headerLine slide-in-left"
            style={{
              background: "var(--ifm-hero-text-color)",
              animationDelay: "0.25s",
            }}
          />
          <p
            className="body text--left fadeIn"
            style={{ animationDelay: "1s" }}
          >
            Thyck Corgis are back and better than ever, this time, in the form
            of a website. We make projects, we get
            <p className="thyck-spacing">t h y c k.</p>
            <br />
            Check out our latest app!
          </p>
          <div>
            <button className="button">Heart 2 Heart</button>
          </div>
        </div>
        <div className="iPhoneBox fadeIn" style={{ animationDelay: "1s" }}>
          <img src="/img/phone_wapp.webp" className="bottom" />
          <img src="/img/phone_h2h.webp" className="top" />
        </div>
      </header>
    </Layout>
  );
}
