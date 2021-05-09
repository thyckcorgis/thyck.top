import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

import PhoneWapp from "../../static/img/phone_wapp.svg";
import PhoneH2H from "../../static/img/phone_h2h.svg";

export default function () {
  return (
    <Layout title="We are thyck" description="Thyck Corgis' Official Website">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <p className="title text-left">
            HelloWo rld?
            <br />
            No.
            <br />
            Hello Thyck.
          </p>
          <p className="body text-left">
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
          <PhoneWapp className={styles.iPhoneSvg} />
          {/* <PhoneH2H className={styles.iPhoneSvg} /> */}
        </div>
      </header>
    </Layout>
  );
}
