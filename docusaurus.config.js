/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Thyck Corgis",
  tagline: "We are thyck",
  url: "https://thyck.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thyckcorgis",
  projectName: "thyck-top",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      switchConfig: {
        darkIcon: "🌚",
        lightIcon: "🌝",
      },
    },
    image: "img/logo.svg",
    navbar: {
      title: "Thyck Corgis",
      logo: {
        alt: "Thyck Corgis Logo",
        src: "img/logo_light.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "Projects",
          items: [
            { label: "Wapp", href: "/projects/wapp" },
            { label: "Heart 2 Heart", href: "/projects/h2h" },
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
      // style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Thyck Corgis. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/thyckcorgis/thyck-top/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/thyckcorgis/thyck-top/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
