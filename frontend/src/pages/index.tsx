// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }







import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import humanoidImg from '@site/src/img/hey.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header
      className={clsx('hero hero--primary')}
      style={styles.heroBanner}
    >
      <div
        className="container"
        style={styles.container}
      >
        {/* LEFT SIDE */}
        <div style={{flex: '1 1 300px'}}>
          <h1 style={styles.title}>Humanoid AI Book</h1>

          <p style={styles.subtitle}>{siteConfig.tagline}</p>

          <div style={styles.buttons}>
            <Link
              to="/docs/intro"
              style={styles.readBtn}
            >
              🚀 Start Reading
            </Link>

            <Link
              to="/chatbot"
              style={styles.chatbotBtn}
            >
              🤖 Chatbot
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div style={styles.right}>
          <img
            src={humanoidImg}
            alt="Humanoid AI"
            style={styles.image}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Humanoid AI Learning Book - Discover the future of Artificial Intelligence"
    >
      <HomepageHeader />

      <main style={{marginTop: '40px'}}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

//
// ⭐ ALL STYLES HERE — SAME LAYOUT, BETTER LOOK
//
const styles: Record<string, React.CSSProperties> = {
  heroBanner: {
    padding: '4rem 0',
    background: "linear-gradient(135deg, #6a00ff, #8b5cf6, #a855f7)",
    color: 'white',
    borderBottomLeftRadius: "35px",
    borderBottomRightRadius: "35px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: 800,
    lineHeight: 1.1,
    background: "linear-gradient(to right, #ffffff, #f3e8ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "0 3px 10px rgba(0,0,0,0.3)",
  },

  subtitle: {
    marginTop: "1rem",
    fontSize: "1.3rem",
    opacity: 0.9,
  },

  buttons: {
    marginTop: "2rem",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },

  readBtn: {
    padding: "14px 28px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  chatbotBtn: {
    padding: "14px 28px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #ec4899, #f472b6)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  right: {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    maxWidth: "300px",
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    animation: "float 3s ease-in-out infinite",
  },
};
