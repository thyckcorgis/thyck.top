import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./brain.module.css";

export const Header = () => (
  <Head>
    <title>Pwease gimme the tech</title>
    <link rel="icon" href="/img/pwease.ico" />
  </Head>
);

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <Header />
        <p
          className={clsx(styles.corgiTitle, styles.slideInLeft)}
          style={{ animationDelay: "0.5s" }}
        >
          If this has made your day better by at least 2%, we have done our job.
        </p>
        <div
          className={clsx(
            styles.headerLine,
            styles.corgiCentered,
            styles.slideInLeft,
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
          )}
          style={{ animationDelay: "1s" }}
        >
          <img
            className={clsx(styles.corgiImg, styles.imgCircle)}
            alt="corgi"
            src="/img/corgi.png"
          />
          <p className={clsx(styles.emoji, styles.corgiCentered)}>
            {String.fromCodePoint(0x1f449) + " " +
              String.fromCodePoint(0x1f448)}
          </p>
        </div>
        <div className={styles.plsCenter}>
          <Link href="/projects/pwetty-pwease-study/with-a-cherry-on-top">
            <button
              className={clsx(
                styles.corgiButton,
                styles.corgiCentered,
                styles.corgiTitle,
              )}
            >
              If not, click here
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
