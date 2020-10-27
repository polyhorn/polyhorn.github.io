module.exports = {
  title: 'Polyhorn',
  tagline: 'A library for rapidly building cross-platform apps in Rust 🦀.',
  url: 'https://polyhorn.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'polyhorn', // Usually your GitHub org/user name.
  projectName: 'polyhorn.github.io', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'preview', // Any value that will identify this message.
      content: '🚧 Polyhorn is still very much a work-in-progress! 🚧',
      backgroundColor: '#ffffff', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    prism: {
      additionalLanguages: ['scss', 'rust', 'toml'],
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'Polyhorn',
      logo: {
        alt: 'Polyhorn Logo',
        src: 'img/emoji-polyhorn.png'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API',
          position: 'left'
        },
        {
          to: 'components/',
          activeBasePath: 'components',
          label: 'Components',
          position: 'left'
        },
        {
          to: 'plugins/',
          activeBasePath: 'plugins',
          label: 'Plugins',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/polyhorn/polyhorn',
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
              label: 'Concepts',
              to: 'docs/',
            },
            {
              label: 'API Reference',
              to: 'api/',
            },
            {
              label: 'Components',
              to: 'components/'
            },
            {
              label: 'Plugins',
              to: 'plugins/'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/polyhorn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/polyhorn/polyhorn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glacyr B.V. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          path: 'docs/general',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/polyhorn/polyhorn.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/polyhorn/polyhorn.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "api-docs",
        path: 'docs/api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.api.js'),
        editUrl:
          'https://github.com/polyhorn/polyhorn.github.io/edit/master/',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "components-docs",
        path: 'docs/components',
        routeBasePath: 'components',
        sidebarPath: require.resolve('./sidebars.components.js'),
        editUrl:
          'https://github.com/polyhorn/polyhorn.github.io/edit/master/',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "plugins-docs",
        path: 'docs/plugins',
        routeBasePath: 'plugins',
        sidebarPath: require.resolve('./sidebars.plugins.js'),
        editUrl:
          'https://github.com/polyhorn/polyhorn.github.io/edit/master/',
      }
    ],
    './docusaurus-fonts'
  ]
};
