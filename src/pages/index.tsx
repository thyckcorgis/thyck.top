import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useState } from "react";
import { useEffect } from "react";

const HomePageTitle = () => (
  <p className="title text--left slide-in-left">
    <span>Hell</span>
    <span className="owo">oWo</span>
    <span>rld?</span>
    <br />
    No.
    <br />
    Hello Thyck.
  </p>
);

const StaticIphoneBox = () => (
  <div className="iPhoneBox fadeIn" style={{ animationDelay: "1s" }}>
    <img src="/img/phone_wapp.webp" className="bottom" />
    <img src="/img/phone_h2h.webp" className="top" />
  </div>
);

const DynamicIphoneBox = () => {
  const [link, setLink] = useState<"h2h" | "wapp">("h2h");
  useEffect(() => {
    const interval = setInterval(() => {
      setLink((v) => (v === "h2h" ? "wapp" : "h2h"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="iPhoneBox fadeIn" style={{ animationDelay: "1s" }}>
      <Link to={"/projects/" + link}>
        <img src="/img/phone_wapp.webp" className="bottom" />
        <img src="/img/phone_h2h.webp" className="top" />
      </Link>
    </div>
  );
};

const IPhoneBox = () => {
  const isBrowser = useIsBrowser();
  return isBrowser ? <DynamicIphoneBox /> : <StaticIphoneBox />;
};

export default function () {
  return (
    <Layout description="Thyck Corgis' Official Website">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <HomePageTitle />
          <div
            className="headerLine slide-in-left"
            style={{
              background: "var(--ifm-hero-text-color)",
              animationDelay: "0.25s",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              className="body text--left fadeIn"
              style={{ animationDelay: "1s" }}
            >
              Thyck Corgis are back and better than ever, this time, in the form
              of a website. We make projects, we get
            </p>
            <p
              className="body text--left fadeIn thyck-spacing"
              style={{ animationDelay: "1s" }}
            >
              t h y c k.
            </p>
            <br />
            <div className="fadeIn" style={{ animationDelay: "1s" }}>
              Check out our latest app!
            </div>
            <div className="fadeIn" style={{ animationDelay: "1.5s" }}>
              <button className="button">Heart 2 Heart</button>
            </div>
          </div>
        </div>
        <IPhoneBox />
      </header>
    </Layout>
  );
}
