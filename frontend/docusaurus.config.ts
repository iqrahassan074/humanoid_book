// import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';

// // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// const config: Config = {
//   title: 'Humanoid AI Book',
//   tagline: 'Explore the Future of AI with Claude',
//   favicon: 'img/favicon.ico',

//   // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
//   future: {
//     v4: true, // Improve compatibility with the upcoming Docusaurus v4
//   },

//   // Set the production url of your site here
//   url: 'https://your-docusaurus-site.example.com',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/',

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'facebook', // Usually your GitHub org/user name.
//   projectName: 'docusaurus', // Usually your repo name.

//   onBrokenLinks: 'throw',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: './sidebars.ts',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//           // Useful options to enforce blogging best practices
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       } satisfies Preset.Options,
//     ],
//   ],

//   themeConfig: {
//     // Replace with your project's social card
//     image: 'img/docusaurus-social-card.jpg',
//     colorMode: {
//       respectPrefersColorScheme: true,
//     },
//     navbar: {
//       title: 'Humanoid AI Book',
//       logo: {
//         alt: 'Humanoid AI Book Logo',
//         src: 'img/logo.svg',
//       },
//       items: [
//         {to: '/signin', label: 'Sign In', position: 'left'},
//         {to: '/signup', label: 'Sign Up', position: 'left'},
//         {to: '/chatbot', label: 'Chatbot', position: 'left'},
//         {to: '/book/intro', label: 'Book', position: 'left'},
//         {
//           href: 'https://github.com/facebook/docusaurus',
//           label: 'GitHub',
//           position: 'right',
//         },
//       ],
//     },
//     footer: {
//       style: 'dark',
//       links: [
//         {
//           title: 'App',
//           items: [
//             {label: 'Sign In', to: '/signin'},
//             {label: 'Sign Up', to: '/signup'},
//             {label: 'Chatbot', to: '/chatbot'},
//             {label: 'Book', to: '/book/intro'},
//           ],
//         },
//       ],
//       copyright: `Copyright © ${new Date().getFullYear()} Humanoid AI Book. Built with Docusaurus.`,
//     },
//     prism: {
//       theme: prismThemes.github,
//       darkTheme: prismThemes.dracula,
//     },
//   } satisfies Preset.ThemeConfig,
// };

// export default config;




























// // @ts-check
// // Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'My AI App',
//   tagline: 'AI Docs + Blog + Chat + Auth',
//   favicon: 'img/favicon.ico',

//   url: 'http://localhost',
//   baseUrl: '/',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   organizationName: 'claude', 
//   projectName: 'my-ai-app',

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: require.resolve('./sidebars.js'),
//           routeBasePath: 'docs', // you can change to "/" if needed
//         },

//         blog: {
//           showReadingTime: true,
//           routeBasePath: 'blog',
//         },

//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       },
//     ],
//   ],

//   themeConfig: {
//     navbar: {
//       title: 'My AI App',
//       logo: {
//         alt: 'My Logo',
//         src: 'img/logo.svg',
//       },
//       items: [
//         { to: '/docs/intro', label: 'Docs', position: 'left' },
//         { to: '/blog', label: 'Blog', position: 'left' },
//         { to: '/login', label: 'Login', position: 'right' },
//         { to: '/signup', label: 'Signup', position: 'right' },
//         { to: '/chat', label: 'Chatbot', position: 'right' },
//         {
//           href: 'https://github.com/',
//           label: 'GitHub',
//           position: 'right',
//         },
//       ],
//     },

//     footer: {
//       style: 'dark',
//       copyright: `© ${new Date().getFullYear()} My AI App`,
//     },

//     prism: {
//       theme: lightCodeTheme,
//       darkTheme: darkCodeTheme,
//     },
//   },
// };

// module.exports = config;









































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
















    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'App',
    //       items: [
    //         { label: 'Docs', to: '/docs/intro' },
    //         // { label: 'Blog', to: '/blog' },
    //         { label: 'Sign In', to: '/signin' },
    //         { label: 'Sign Up', to: '/signup' },
    //         { label: 'Chatbot', to: '/chatbot' },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${
    //     new Date().getFullYear()
    //   } Humanoid AI Book.`,
    // },

    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },




footer: {
  style: 'dark',

  // 🌌 Purple futuristic gradient footer background
  // Add this custom style in your CSS too!
  links: [
    {
      title: '🚀 App Navigation',
      items: [
        { label: '📘 Docs', to: '/docs/intro' },
        { label: '🔐 Sign In', to: '/signin' },
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

  // 🌙 Beautiful copyright  
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
