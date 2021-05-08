import React, { useState } from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

import clsx from "clsx";

const TeamList = [
  {
    title: "Charles",
    altTitle: (
      <>
        {String.fromCodePoint(0x1f449)}
        {String.fromCodePoint(0x1f448)}
      </>
    ),
    url: "/img/charles.png",
    description: <>This is Charles</>,
    altDescription: (
      <>
        Charles is known for his massive dumptruck. He throws it back regularly,
        twice a day, for health benefits.
      </>
    ),
    Svg: require("../../static/img/c.svg").default,
  },
  {
    title: "Annette",
    altTitle: (
      <>
        {String.fromCodePoint(0x1f449)}
        {String.fromCodePoint(0x1f448)}
      </>
    ),
    url: "/img/annette.png",
    description: <>This is Annette</>,
    altDescription: (
      <>
        Annette is known for her amazing flowing hair. She is the first of the
        group to have such beautiful hair. Will was too big of a fan and copied
        her, dyeing his own hair like Annette.
      </>
    ),
    Svg: require("../../static/img/a.svg").default,
  },
  {
    title: "Will",
    altTitle: (
      <>
        {String.fromCodePoint(0x1f449)}
        {String.fromCodePoint(0x1f448)}
      </>
    ),
    url: "/img/will.png",
    description: <>This is Will</>,
    altDescription: (
      <>
        Will is known for his uncanny ability to take everything out of context.
        He practices once every hour by targetting all his friends.
      </>
    ),
    Svg: require("../../static/img/w.svg").default,
  },
  {
    title: "Kim Juyoung",
    altTitle: (
      <>
        {String.fromCodePoint(0x1f449)}
        {String.fromCodePoint(0x1f448)}
      </>
    ),
    url: "/img/juyoung.png",
    description: <>This is Juyoung</>,
    altDescription: (
      <>
        Kim Juyoung is known for his unwavering ability to ignore all pleading
        faces, much to everyone's dismay. He is also the owner of the rumoured
        lotus blankets.
      </>
    ),
    Svg: require("../../static/img/k.svg").default,
  },
];

function Team({ title, altTitle, url, description, altDescription, Svg }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={clsx("col col--3")}>
      <div
        className="text--center"
        onMouseOver={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown ? (
          <div>
            <Svg className={styles.letterSvg} alt={title}>
              <path id="letter" />
            </Svg>
            <img className={styles.personImgHover} src={url} alt={title} />
          </div>
        ) : (
          <div>
            <img className={styles.personImg} src={url} alt={title} />{" "}
          </div>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <div>
          {isShown ? (
            <div>
              <p className={styles.emoji}>{altTitle}</p>
              <h3>{title}</h3>
              <p>{altDescription}</p>
            </div>
          ) : (
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          )}
        </div>
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
