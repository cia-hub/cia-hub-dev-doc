import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CiaHub',
  tagline: 'Documentação CiaHub',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ciahub.com.br',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cia-hub-dev-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'CiaHub',
      logo: {
        alt: 'CiaHub Logo',
        src: 'img/cia_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {to: '/blog', label: 'História', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Youtube',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Instagram',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Outos',
          items: [
            {
              label: 'História',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cia-hub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CiaHub, Inc. Documentação CiaHub.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
