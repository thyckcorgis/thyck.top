/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Thyck Corgis",
  tagline: "We are thyck",
  url: "https://thyck.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "thyckcorgis",
  projectName: "thyck.top",
  themeConfig: {
    colorMode: { defaultMode: "dark" },
    image: "img/logo.svg",
    navbar: {
      title: "Thyck Corgis",
      logo: {
        alt: "Thyck Corgis Logo",
        src: "img/svg/logo_light.svg",
        srcDark: "img/svg/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "Projects",
          items: [
            { label: "Wapp", href: "https://github.com/thyckcorgis/wapp" },
            {
              label: "Heart 2 Heart",
              href: "https://github.com/thyckcorgis/h2h",
            },
            {
              label: "UP BRAIN BY 2%!!!",
              href: "/projects/pwetty-pwease-study",
            },
            {
              label: "The Ramen Empire",
              href: "/projects/the-ramen-empire",
            },
          ],
        },
        {
          position: "left",
          to: "/team",
          label: "Our Team",
        },
        {
          position: "left",
          to: "/about",
          label: "About Us",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/thyckcorgis",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: "Copyright © " + new Date().getFullYear() +
        " Thyck Corgis. Built with Docusaurus.",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/thyckcorgis/thyck.top/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/thyckcorgis/thyck.top/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
