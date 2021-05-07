import React from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

import clsx from "clsx";

const TeamList = [
  {
    title: "Charles",
    url: "/img/charles.png",
    description: <>This is Charles</>,
  },
  {
    title: "Annette",
    url: "/img/annette.png",
    description: <>This is Annette</>,
  },
  {
    title: "Will",
    url: "/img/will.png",
    description: <>This is Will</>,
  },
  {
    title: "Juyoung",
    url: "/img/juyoung.png",
    description: <>This is Juyoung</>,
  },
];

function Team({ url, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <img className={styles.personImg} src={url} alt={title} />
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
