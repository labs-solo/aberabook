// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AquaBera Documentation',
  tagline: 'Automate and optimize your crypto liquidity provision with AquaBera.',
  url: 'https://docs.aquabera.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw', // replace with 'throw' to stop building if broken links
  onBrokenMarkdownLinks: 'throw',
  favicon: 'https://aquabera.com/assets/favicon-32x32.png',
  customFields: {
    prefabApiKey: process.env.REACT_APP_PREFAB_FRONTEND_PRODUCTION_API_KEY || "398-Development-P435-E907-FRONTEND-b3f733ec-b1b7-464f-8b6f-9cf91d23a434",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  scripts: [
    {
      src: '/js/hotjar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particle.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/firework.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/ball.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/bar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/game.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particleProfiles.js',
      type: 'module',
      async: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/labs-solo/aberabook/edit/main/docusaurus',
          admonitions: {
            tag: ':::',
            keywords: [
              // Admonitions defaults
              'note',
              'tip',
              'info',
              'caution',
              'danger',

              // Admonitions custom
              'callout',
              'prerequisites',
              'aquabera',
              'warning',
            ],
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/__index.scss'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'docs/dev-docs/api/openapi.yaml',
            route: '/openapi/'
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#4945FF',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'aquabera-launch',
        content:
          "AquaBera is launching on Bartio Testnet Soon 🚀!",
        backgroundColor: 'rgb(236, 235, 255)',
        textColor: '#091E42',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: '392RJ63O14',
        apiKey: 'ed62374a794e8da5accb298e13618614',
        indexName: 'aquaberaDocsNext',
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'AquaBera Documentation Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'dev-docs/intro',
            position: 'left',
            label: 'Developer Docs',
          },
          {
            type: 'doc',
            docId: 'user-docs/intro',
            position: 'left',
            label: 'User Guide'
          },
          {
            type: 'doc',
            docId: 'community/intro',
            position: 'left',
            label: 'Community'
          },
          {
            href: 'https://github.com/labs-solo/aberabook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Dev Docs',
                to: '/dev-docs/intro',
              },
              {
                label: 'User Guide',
                to: '/user-docs/intro',
              },
              {
                label: 'Community',
                to: '/community/intro'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.aquabera.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aquabera',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/aquabera',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://aquabera.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/labs-solo/aberabook',
              },
              {
                label: 'AquaBera.io',
                href: 'https://aquabera.com',
              }
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        // selector: '.markdown :not(em) > img', // disabled to ensure it works with themed images
        // We also have a bug with images embedded in details blocks, see https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom/issues/27
      },
      hubspot: {
        accountId: 6893032,
        async: false, // OPTIONAL: sets the async attribute on the script tag, defaults to false
        defer: false, // OPTIONAL: sets the defer attribute on the script tag, defaults to false
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WT49VGT',
      },
    ],
    'docusaurus-plugin-hubspot',
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_DETCfjmHIm184mceL8duwutdQgOnVTZSC59xontNRWN",
        appUrl: "https://eu.i.posthog.com", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
    /**
     * Seems like we have an issue where a medium-zoom--hidden class is applied on the second, top-most (z-index wise) image,
     * actually hiding the image when zoomed in. Found no related issue in the plugin's repo, might have to dig whether it's
     * related to the Docusaurus canary build or not.
     */
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
    //     redirects: [
    //       // /docs/oldDoc -> /docs/newDoc
    //       {
    //         to: '/dev-docs/admin-panel-customization',
    //         from: ['/developer-docs/latest/development/admin-customization', '/developer-docs/latest/development/admin-customization.html'],
    //       },
    //       // Redirect from multiple old paths to the new path
    //       // {
    //       //   to: '/docs/newDoc2',
    //       //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
    //       // },
    //     ],
    //   },
    // ],
  ],
};

module.exports = config;
