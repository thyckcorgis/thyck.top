import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

import IphoneSvg from "../../static/img/phone_wapp.svg";
export default function () {
  return (
    <Layout
      title="We are thyck"
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <p className="title">
            HelloWo rld?
            <br />
            No.
            <br />
            Hello Thyck.
          </p>
          <p className="body">
            Thyck Corgis are back and better than ever, this time, in the form
            of a website. We make projects, we get t h y c k.
            <br />
            <br />
            Check out our latest app!
          </p>
          <div>
            <button className="button">Heart 2 Heart</button>
          </div>
        </div>
        <div className="iPhoneBox">
          <IphoneSvg className={styles.IphoneSvg} />
        </div>
      </header>
    </Layout>
  );
}
