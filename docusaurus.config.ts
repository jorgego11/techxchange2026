import type {Config} from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"
import {themes} from "prism-react-renderer"

const config: Config = {
  title: "TechXchange 2026 - Concert Protect Labs",
  tagline: "IBM IT & Network Automation Tiger Team",
  url: "https://jorgego11.github.io",
  baseUrl: "/techxchange2026/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  markdown: {
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jorgego11", // Usually your GitHub org/user name.
  projectName: "techxchange2026", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Required for search to function correctly
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful metadata like html lang.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "labs",
          routeBasePath: "/labs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IBM/waiops-tech-jam/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IBM/waiops-tech-jam/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   trackingID: "G-7WTTHT6SEH",
        //   anonymizeIP: true,
        // },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: "filename",
        docsDir: ["labs"],
        docsRouteBasePath: ["labs"],
        highlightSearchTermsOnTargetPage: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
      },
    ],
    "@docusaurus/theme-mermaid",
  ],

  themeConfig: {
    navbar: {
      style: "dark",
      title: "TechXchange 2026",
      logo: {
        alt: "Logo",
        src: "/img/IBM_logo_blue.png",
        srcDark: "/img/IBM_logo_white.png", // Optional: different logo for dark mode
      },
      items: [

        {
          to: "/labs/jam-in-a-box",
          label: "Concert Protect Labs",
          position: "left",
          activeBaseRegex: "labs/",
        },

        // TODO: Automations coming soon
        // {
        //   to: "/automations",
        //   label: "Automations",
        //   position: "left",
        // },
        // {
        //   href: "https://github.com/IBM/waiops-tech-jam",
        //   label: "GitHub",
        //   position: "right",
        // },
        {
          type: "search",
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
              label: "Instana",
              href: "https://www.ibm.com/docs/en/instana-observability",
            },
            {
              label: "Concert",
              href: "https://www.ibm.com/docs/en/concert",
            },
            {
              label: "CP4AIOps",
              href: "https://www.ibm.com/docs/en/cloud-paks/cloud-pak-aiops",
            },
            {
              label: "NOI",
              href: "https://www.ibm.com/docs/en/noi/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "IBM",
              href: "https://www.ibm.com/",
            },
          ],
        },
        {
          title: "More",
          items: [

            {
              label: "GitHub",
              href: "https://github.com/jorgego11/techxchange2026",
            },
          ],
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: {start: "highlight-start", end: "highlight-end"},
        },
        {
          className: "code-block-error-line",
          line: "highlight-next-line-error",
          block: {start: "highlight-error-start", end: "highlight-error-end"},
        },
        {
          className: "code-block-correct-line",
          line: "highlight-next-line-correct",
          block: {
            start: "highlight-correct-start",
            end: "highlight-correct-end",
          },
        },
        {
          className: "code-block-emphasis-line",
          line: "highlight-next-line-emphasise",
          block: {
            start: "highlight-emphasis-start",
            end: "highlight-emphasis-end",
          },
        },
      ],
      additionalLanguages: ["bash"],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
}

export default config
