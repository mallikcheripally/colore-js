import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'colore-js',
  tagline: 'colore-js - Color Generation, Conversion, Manipulation and Validation Library',
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
          editUrl: 'https://github.com/mallikcheripally/colore-js/edit/main/website/',
          // versions: {
          //   current: {
          //     label: 'Next',
          //     path: 'next',
          //   },
          // },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/social-card.jpg',
    navbar: {
      title: 'colore-js',
      logo: {
        alt: 'Colore Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          position: 'right',
          label: 'Installation',
          to: 'docs/getting-started/installation',
        },
        {
          position: 'right',
          label: 'Contrast Ratio',
          to: 'docs/api/analysis/getContrastRatio',
          activeBasePath: 'docs/api/analysis/getContrastRatio',
        },
        {
          position: 'right',
          label: 'Conversions',
          to: 'docs/api/conversions/cmykToRgb',
          activeBasePath: 'docs/api/conversions/',
        },
        {
          position: 'right',
          label: 'Blending',
          to: 'docs/api/manipulations/blendColors',
          activeBasePath: 'docs/api/manipulations/blendColors',
        },
        {
          position: 'right',
          label: 'Parser',
          to: 'docs/api/parser/decomposeColor',
          activeBasePath: 'docs/api/parser/',
        },
        {
          position: 'right',
          label: 'Validations',
          to: 'docs/api/validations/isValidHex',
          activeBasePath: 'docs/api/validations/',
        },
        {
          href: 'https://github.com/mallikcheripally/colore-js',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/colore-js',
          label: 'npm',
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
              href: 'https://github.com/mallikcheripally/colore-js/discussions',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mallikcheripally/colore-js',
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
    metadata: [
      { name: 'description', content: 'A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis.' },
      { name: 'keywords', content: 'Colore, colore js, colore-js, JavaScript, TypeScript, Color Conversion, Color Manipulation, Analogous Colors, Tetradic Colors, Triadic Colors, Monochromatic Colors, Color Blending, Accessibility, a11y, Contrast ratio, CSS, color library, Color Validation, hex, hsl, hsla, rgb, rgba, lch, lab, xyz', },
      { property: 'og:title', content: 'colore-js | Color Generation, Conversion, Manipulation and Validation Library' },
      { property: 'og:description', content: 'A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis.' },
      { property: 'og:image', content: 'https://colore.mallikcheripally.com/img/colore-logo.png' },
      { property: 'og:url', content: 'https://colore.mallikcheripally.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'colore-js | Color Generation, Conversion, Manipulation and Validation Library' },
      { name: 'twitter:description', content: 'A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis.' },
      { name: 'twitter:image', content: 'https://colore.mallikcheripally.com/img/colore-logo.png' },
      {
        type: 'application/ld+json',
        content: `{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "Colore JS",
          "description": "A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis.",
          "codeRepository": "https://github.com/mallikcheripally/colore-js",
          "programmingLanguage": "JavaScript",
          "license": "https://opensource.org/licenses/MIT",
          "keywords": ["colore-js", "colore", "colore js", "color conversion", "color manipulation", "color validation", "color harmony", "color utility", "color contrast ratio", "accessibility", "high performance", "no dependencies", "small size"],
          "author": {
            "@type": "Person",
            "name": "Mallik Cheripally"
          },
          "datePublished": "2024-06-16",
        }`,
      },
    ],
    structuredData: {
      excludedRoutes: [], // array of routes to exclude from structured data generation
      verbose: false, // print verbose output to console
      featuredImageDimensions: {
        width: 1200,
        height: 630,
      },
      authors: {
        author_name: {
          authorId: 'mallikcheripally',
          url: 'https://mallikcheripally.com',
          sameAs: ['https://github.com/mallikcheripally', 'https://www.linkedin.com/in/mallikcheripally/', 'https://www.npmjs.com/~mallikcheripally'],
        },
      },
      organization: {
        name: 'Colore JS',
        url: 'https://colore.mallikcheripally.com',
        logo: 'https://colore.mallikcheripally.com/img/logo.png',
      },
      website: {
        datePublished: '2024-06-16', // default is the current date
        inLanguage: 'en-US', // default: en-US
      },
      webpage: {
        datePublished: '2023-06-16', // default is the current date
        inLanguage: 'en-US', // default: en-US
      },
      breadcrumbLabelMap: {
        'introduction': 'Introduction',
        'getting-started/installation': 'Installation',
        'getting-started/quick-start': 'Quick Start',
      }
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
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-N7DZEKLZNY',
        anonymizeIP: true,
      },
    ],
    '@stackql/docusaurus-plugin-structured-data',
  ],
};

export default config;
