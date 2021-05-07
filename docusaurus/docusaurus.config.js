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
    navbar: {
      title: "Thyck Corgis",
      logo: {
        alt: "Thyck Corgis Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          to: "/projects",
          label: "Projects",
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
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
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
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/thyckcorgis",
            },
          ],
        },
      ],
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
            "https://github.com/thyckcorgis/thyck-top/edit/master/docusaurus/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/thyckcorgis/thyck-top/edit/master/docusaurus/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
