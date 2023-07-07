import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

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
      <Link to={"https://github.com/thyckcorgis/" + link}>
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

export default function() {
  return (
    <Layout description="Thyck Corgis' Official Website">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              <Link to="https://github.com/thyckcorgis/h2h">
                <button className="button">Heart 2 Heart</button>
              </Link>
            </div>
          </div>
        </div>
        <IPhoneBox />
      </header>
    </Layout>
  );
}
