import { useEffect, useRef } from 'react';

import scrollToElement from '@/helpers/scrollToElement';
import styles from '@/styles/pulseclanWebsite.module.scss';

const PulseClanWebsite: React.FC = () => {
  const backToTopBtn = useRef<HTMLButtonElement | null>(null);

  type ITechnologies = Array<{ link: string; alt: string; type: string }>;

  const technologies: ITechnologies = [
    {
      link: '/technologies/ts.svg',
      alt: 'Typescript',
      type: 'frontend',
    },
    {
      link: '/technologies/react.svg',
      alt: 'React',
      type: 'frontend',
    },
    {
      link: '/technologies/nextjs.svg',
      alt: 'NextJS',
      type: 'frontend',
    },
    {
      link: '/technologies/sass.svg',
      alt: 'Sass',
      type: 'frontend',
    },
    {
      link: '/technologies/postcss.svg',
      alt: 'PostCSS',
      type: 'frontend',
    },
    {
      link: '/technologies/git.svg',
      alt: 'Git',
      type: 'frontend',
    },
    {
      link: '/technologies/webpack.svg',
      alt: 'Webpack',
      type: 'frontend',
    },
    {
      link: '/technologies/node-express.svg',
      alt: 'NodeJS - Express',
      type: 'backend',
    },
    {
      link: '/technologies/mongodb.svg',
      alt: 'MongoDB',
      type: 'backend',
    },
    {
      link: '/technologies/nginx.svg',
      alt: 'Nginx',
      type: 'backend',
    },
  ];

  const checkBackToTopBtn = () => {
    const btnStyles = getComputedStyle(backToTopBtn.current!);

    if (window.scrollY >= 600) {
      if (btnStyles.display === 'block') return;

      backToTopBtn.current!.style.display = 'block';

      setTimeout(() => {
        backToTopBtn.current!.style.opacity = '100';
      }, 1);
    } else {
      if (btnStyles.opacity === '0') return;

      backToTopBtn.current!.style.opacity = '0';

      setTimeout(() => {
        backToTopBtn.current!.style.display = 'none';
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    checkBackToTopBtn();
    window.addEventListener('scroll', checkBackToTopBtn);

    return () => {
      window.removeEventListener('scroll', checkBackToTopBtn);
    };
  }, []);

  return (
    <main id={styles.main}>
      <div className={styles.banner}></div>
      <a
        href='https://pulse-clan.com'
        target='_blank'
        rel='noreferrer'
        className={styles.cta}
      >
        Go to live website &nbsp; &nbsp;
      </a>
      <p className={styles.techstack_paragraph}>Tech stack used:</p>
      <div className={styles.techstack_wrapper}>
        <div
          className={styles.techstack_container}
          id={styles.frontend_container}
        >
          {technologies
            .filter(tech => tech.type === 'frontend')
            .map(tech => (
              <div key={tech.link} className={styles.techstack_subcontainer}>
                <span className={styles.techstack_tooltip}>{tech.alt}</span>
                <img
                  src={tech.link}
                  alt={tech.alt}
                  className={styles.techstack_icon}
                />
              </div>
            ))}
        </div>

        <div className={styles.techstack_separator}></div>

        <div className={styles.techstack_container}>
          {technologies
            .filter(tech => tech.type === 'backend')
            .map(tech => (
              <div key={tech.link} className={styles.techstack_subcontainer}>
                <span className={styles.techstack_tooltip}>{tech.alt}</span>
                <img
                  src={tech.link}
                  alt={tech.alt}
                  className={styles.techstack_icon}
                />
              </div>
            ))}
        </div>
      </div>

      <div className={styles.text_wrapper}>
        <h1 className={styles.heading}>
          About the project
          <span className={styles.paragraph}>
            Full-stack MERN website for Pulse Clan, an international gaming
            organization with over 500k followers across social media.
          </span>
        </h1>

        <div className={styles.overview_container}>
          <p className={styles.paragraph} id={styles.overview_title}>
            What the project entailed:
          </p>
          <ul className={styles.overview_ul}>
            <li className={styles.overview_li}>
              &#x2022; Creating a custom headless CMS to facilitate website
              customization for the managers, and allowing members to modify
              their public information and manage roster sections on the
              website.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Integrating authentication and hierarchical authorization
              levels and restrictions within the CMS, allowing managers to add,
              remove and modify members and roster at will.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Registering applications and contact form submissions to
              a database.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Integrating Discord webhooks for automatic submission of
              applications to dedicated channels.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Implementing the Youtube API for automatic data retrieval
              and caching in the database.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Utilizing Twitch API to display information on active
              streamers and automatically refreshing its API credentials to
              ensure uninterrupted use without the need of maintenance.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Building pages with features like carousels, accordions
              and animations.
            </li>
            <li className={styles.overview_li}>
              &#x2022; Deploying the website on a Linux machine with Nginx as a
              reverse proxy, PM2 for process management, and MongoDB for the
              backend.
            </li>
          </ul>
        </div>

        <h2 className={styles.contents_heading}>Contents</h2>
        <ul className={styles.contents_ul}>
          <li className={styles.contents_li}>
            <button onClick={() => scrollToElement('landingpage')}>
              Landing page
            </button>
          </li>
          <button
            onClick={() => scrollToElement('applications')}
            className={styles.contents_li}
          >
            Application and Contact pages
          </button>
          <button
            onClick={() => scrollToElement('roster')}
            className={styles.contents_li}
          >
            Roster page
          </button>
          <button
            onClick={() => scrollToElement('faqandwallpapers')}
            className={styles.contents_li}
          >
            Faq and Wallpaper pages
          </button>
          <button
            onClick={() => scrollToElement('cms')}
            className={styles.contents_li}
          >
            Content Management System overview
          </button>
          <button
            onClick={() => scrollToElement('deployment')}
            className={styles.contents_li}
          >
            Setting up and deploying the server
          </button>
        </ul>
      </div>
      <button
        ref={backToTopBtn}
        onClick={scrollToTop}
        className={styles.backtotopbtn}
      >
        Back to top
      </button>
    </main>
  );
};

export default PulseClanWebsite;
