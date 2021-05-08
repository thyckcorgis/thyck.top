import React, { useState } from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

import clsx from "clsx";

const TeamList = [
  {
    title: "Charles",
    url: "/img/charles.png",
    description: <>This is Charles</>,
    Svg: require("../../static/img/c.svg").default,
  },
  {
    title: "Annette",
    url: "/img/annette.png",
    description: <>This is Annette</>,
    Svg: require("../../static/img/a.svg").default,
  },
  {
    title: "Will",
    url: "/img/will.png",
    description: <>This is Will</>,
    Svg: require("../../static/img/w.svg").default,
  },
  {
    title: "Kim Juyoung",
    url: "/img/juyoung.png",
    description: <>This is Kim Juyoung</>,
    Svg: require("../../static/img/k.svg").default,
  },
];

function Team({ title, url, description, Svg }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={clsx("col col--3")}>
      <div
        className="text--center"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img className={styles.personImg} src={url} alt={title} />
        {isShown && (
          <div>
            <Svg className={styles.personImg} alt={title} />
          </div>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Teampage() {
  return (
    <Layout
      title="We are thyck"
      description="Description will go into a meta tag in <head />"
    >
      <section className={styles.person}>
        <div className="container">
          <div className="row">
            {TeamList.map((props, idx) => (
              <Team key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      {/* <div>

        <p className="title">Meet the team </p>
        <p className="body">Charles</p>
      </div> */}
    </Layout>
  );
}
