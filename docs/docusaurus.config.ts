import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Colore',
  tagline: 'A JS library for color conversion, manipulation, accessibility analysis and more.',
  favicon: 'img/favicon.ico',
  url: 'https://colore.mallikcheripally.com',
  baseUrl: '/',
  organizationName: 'mallikcheripally',
  projectName: 'colore',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  stylesheets: [
    {
      href: '/css/custom.css',
      type: 'text/css',
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs', // Ensure this path is correct
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/mallikcheripally/colore/edit/main/website/',
          versions: {
            current: {
              label: 'Next',
              path: 'next',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Colore',
      logo: {
        alt: 'Colore Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownActiveClassDisabled: true,
        // },
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://github.com/mallikcheripally/colore',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    search: {
      placeholder: 'Search...',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/mallikcheripally/colore/discussions',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mallikcheripally/colore',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 Mallik Cheripally`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
      },
    ],
  ],
};

export default config;
