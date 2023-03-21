import React from "react";
import { Header } from "./index";
import clsx from "clsx";

import styles from "./brain.module.css";
import Layout from "@theme/Layout";

export default function UwU() {
  return (
    <Layout>
      <div className="container">
        <Header />
        <p className={clsx(styles.corgiTitle, styles.slideInRight)}>
          Now if THIS has made your day better by at least 2%, u r milk.
        </p>
        <div
          className={clsx(
            styles.headerLine,
            styles.corgiCentered,
            styles.slideInRight,
          )}
          style={{
            animationDelay: "0.5s",
            background: "var(--ifm-hero-text-color)",
          }}
        />
        <div
          className={clsx(
            styles.imgCircle,
            styles.corgiCentered,
            styles.flipInX,
            styles.pulseNSpin,
          )}
          style={{ animationDelay: "1s" }}
        >
          <img
            className={clsx(styles.corgiImg, styles.imgCircle)}
            src="/img/corgi2.jpg"
            alt="corgi"
          />
        </div>
        <p className={clsx(styles.corgiTitle, styles.slideInRight)}>
          Pwetty pwease study?
        </p>
      </div>
    </Layout>
  );
}
