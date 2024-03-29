import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

import clsx from "clsx";

interface SvgProps {
  pathD: string;
  letter: string;
}
const Svg = ({ pathD, letter }: SvgProps) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="letter-svg"
  >
    <path
      className={clsx("letter", letter)}
      d={pathD}
      stroke="var(--ifm-font-color-base)"
      strokeWidth="5"
    />
  </svg>
);

// DEFINE THE TEAM DETAILS
const TeamList = [
  {
    title: "Charles Anchentai",
    url: "/img/team/charles.webp",
    description: <>This is Charles</>,
    pathD:
      "M197.722 378.555L197.728 378.559C220.368 390.957 245.686 397.143 273.649 397.143C294.618 397.143 314.007 393.648 331.799 386.639L331.809 386.635C349.869 379.357 365.126 368.967 377.553 355.459L378.527 354.4L377.509 353.383L358.709 334.583L357.629 333.503L356.569 334.602C335.276 356.684 308.078 367.743 274.849 367.743C252.954 367.743 233.076 362.734 215.18 352.734C197.277 342.729 183.207 329.052 172.944 311.688C162.955 294.335 157.949 274.865 157.949 253.243C157.949 231.622 162.955 212.152 172.944 194.799C183.207 177.435 197.277 163.758 215.18 153.753C233.076 143.753 252.954 138.743 274.849 138.743C307.813 138.743 335.018 149.671 356.582 171.498L357.642 172.571L358.709 171.504L377.509 152.704L378.527 151.687L377.553 150.628C365.126 137.12 350 126.86 332.199 119.848C314.407 112.839 295.018 109.343 274.049 109.343C246.086 109.343 220.768 115.53 198.128 127.928C175.492 140.324 157.693 157.582 144.754 179.686L144.751 179.691C132.075 201.537 125.749 226.067 125.749 253.243C125.749 280.42 132.075 305.08 144.747 327.189L144.753 327.199L144.758 327.208C157.695 349.039 175.357 366.161 197.722 378.555Z",
    letter: styles.letterC,
    animationDelay: "1s",
  },
  {
    title: "Annette Loo",
    url: "/img/team/annette.webp",
    description: <>This is Annette</>,
    pathD:
      "M138.399 391.743H139.369L139.767 390.858L172.969 316.943H327.028L360.23 390.858L360.628 391.743H361.599H392.799H395.134L394.163 389.62L266.163 109.62L265.762 108.743H264.799H235.599H234.635L234.235 109.62L106.235 389.62L105.264 391.743H107.599H138.399ZM185.112 289.943L249.999 144.72L314.886 289.943H185.112Z",
    letter: styles.letterA,
    animationDelay: "1.2s",
  },
  {
    title: "Will Chowokawy",
    url: "/img/team/will.webp",
    description: <>This is Will</>,
    pathD:
      "M459.22 110.479L459.887 108.5H457.799H429.399H428.323L427.978 109.519L347.395 347.336L266.419 109.517L266.073 108.5H264.999H237.399H236.332L235.982 109.508L153.823 346.157L74.4208 109.523L74.0776 108.5H72.9988H42.5988H40.5101L41.1774 110.479L135.577 390.479L135.922 391.5H136.999H167.799H168.868L169.217 390.489L250.195 155.809L330.78 390.487L331.128 391.5H332.199H363.399H364.476L364.82 390.479L459.22 110.479Z",
    letter: styles.letterW,
    animationDelay: "1.4s",
  },
  {
    title: "Kim Juyoung",
    url: "/img/team/juyoung.webp",
    description: <>This is Juyoung</>,
    pathD:
      "M324.923 108.955L163.099 275.504V110V108.5H161.599H131.999H130.499V110V390V391.5H131.999H161.599H163.099V390V317.015L218.729 260.607L332.067 390.984L332.515 391.5H333.199H368.399H371.632L369.544 389.031L240.815 236.861L361.083 111.036L363.508 108.5H359.999H325.999H325.365L324.923 108.955Z",
    letter: styles.letterK,
    animationDelay: "1.6s",
  },
];

function Team({ title, url, description, pathD, letter, animationDelay }) {
  return (
    <div className={clsx("col col--3 team")}>
      <div className="img-circle centered flip-in-x" style={{ animationDelay }}>
        <Svg key={title} pathD={pathD} letter={letter} />
        <img className="person-img" src={url} alt={title} />
        <p className="emoji centered">
          {String.fromCodePoint(0x1f449) + " " + String.fromCodePoint(0x1f448)}
        </p>
      </div>
      <p
        className="body text--bold text--center fadeIn"
        style={{ animationDelay }}
      >
        {title}
      </p>
      <p className="body text--center fadeIn " style={{ animationDelay }}>
        {description}
      </p>
    </div>
  );
}

export default function Teampage() {
  return (
    <Layout
      title="Our Thyck Team"
      description="Meet the people behind Thyck Corgis."
    >
      <section className={styles.person}>
        <div className="container">
          <p className="title text--center slide-in-left">
            Meet the people behind Thyck Corgis.
          </p>
          <div
            className="headerLine centered slide-in-left"
            style={{ animationDelay: "0.5s" }}
          />
          <div style={{ height: "69px" }} />
          <div className="row">
            {TeamList.map((props, idx) => (
              <Team key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
