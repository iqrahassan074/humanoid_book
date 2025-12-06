import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Humanoid AI Book',
  tagline: 'Explore the Future of AI with Claude',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',          // <--- SUPER IMPORTANT
          sidebarPath: require.resolve('./sidebars.js'), // <--- FIXED
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My AI App',
      logo: {
        alt: 'Logo',
        src: 'img/ai.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',     // <--- MUST MATCH sidebars.js
          position: 'left',
          label: 'Docs',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        
        { to: '/signup', label: 'Sign Up', position: 'right' },
        { to: '/chatbot', label: 'Chatbot', position: 'right' },
      ],
    },


footer: {
  style: 'dark',


  links: [
    {
      title: '🚀 App Navigation',
      items: [
        { label: '📘 Docs', to: '/docs/intro' },
        { label: '🆕 Sign Up', to: '/signup' },
        { label: '🤖 Chatbot', to: '/chatbot' },
      ],
    },
    {
      title: '🌍 Connect',
      items: [
        { label: 'GitHub', href: 'https://github.com/' },
        { label: 'Twitter', href: 'https://twitter.com/' },
        { label: 'LinkedIn', href: 'https://linkedin.com/' },
      ],
    },
    {
      title: '📚 About this Book',
      items: [
        {
          label: 'What is Humanoid AI?',
          to: '/docs/intro',
        },
        {
          label: 'Author',
          href: '#',
        },
      ],
    },
  ],

  copyright: `
    <div style="margin-top: 10px; font-size: 14px;">
      <strong>Humanoid AI Book</strong> © ${new Date().getFullYear()}  
      <br />
      <span style="opacity: 0.7;">Crafted with 💜 for future innovators.</span>
    </div>
  `,
},








  },
};

export default config;
