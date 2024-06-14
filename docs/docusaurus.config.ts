import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Colore',
  tagline: 'A JS library for Color Conversions, Color Manipulations, Generating Harmony Colors, Accessibility Analysis and Color Parsing.',
  favicon: 'img/favicon.ico',
  url: 'https://colore.mallikcheripally.com',
  baseUrl: '/',
  organizationName: 'mallikcheripally',
  projectName: 'colore-js',
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
    customFields: {
      meta: [
        {
          name: 'description',
          content: 'Colore is a powerful and versatile color manipulation library for JavaScript and TypeScript.',
        },
        {
          name: 'keywords',
          content: 'Colore, Color, JavaScript, TypeScript, Color Conversion, Color Manipulation, Analogous Colors, Tetradic Colors, Triadic Colors, Monochromatic Colors, Color Blending, Accessibility, a11y, Contrast, CSS, color library',
        },
      ],
    },
    metadata: [
      { name: 'description', content: 'A JS library for Color Conversions, Color Manipulations, Generating Harmony Colors, Accessibility Analysis and Color Parsing.' },
      { name: 'keywords', content: 'Colore, JavaScript, TypeScript, Color Conversion, Color Manipulation, Analogous Colors, Tetradic Colors, Triadic Colors, Monochromatic Colors, Color Blending, Accessibility, a11y, Contrast ratio, CSS, color library, Color Validation, hex, hsl, hsla, rgb, rgba, lch, lab, xyz', },
      { property: 'og:title', content: 'Colore - Color Generation, Conversion, Manipulation and Validation Library' },
      { property: 'og:description', content: 'A JS library for Color Conversions, Color Manipulations, Generating Harmony Colors, Accessibility Analysis and Color Parsing.' },
      { property: 'og:image', content: 'https://colore.mallikcheripally.com/img/colore-logo.png' },
      { property: 'og:url', content: 'https://colore.mallikcheripally.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Colore - Color Generation, Conversion, Manipulation and Validation Library' },
      { name: 'twitter:description', content: 'A JS library for Color Conversions, Color Manipulations, Generating Harmony Colors, Accessibility Analysis and Color Parsing.' },
      { name: 'twitter:image', content: 'https://colore.mallikcheripally.com/img/colore-logo.png' },
    ],
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
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-XXXXXX-1', // Replace with your actual Google Analytics tracking ID
        anonymizeIP: true,
      },
    ]
  ],
};

export default config;
