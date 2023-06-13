import styles from '@/styles/pulseclanWebsite.module.scss';

const PulseClanWebsite: React.FC = () => {
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
              <img
                src={tech.link}
                alt={tech.alt}
                key={tech.link}
                className={styles.techstack_icon}
              />
            ))}
        </div>

        <div className={styles.techstack_separator}></div>

        <div className={styles.techstack_container}>
          {technologies
            .filter(tech => tech.type === 'backend')
            .map(tech => (
              <img
                src={tech.link}
                alt={tech.alt}
                key={tech.link}
                className={styles.techstack_icon}
              />
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

        <h2 className={styles.contents_heading}>Contents</h2>
        <ul className={styles.contents_ul}>
          <li className={styles.contents_li}>
            <a href={`#landingpage`}>Landing page</a>
          </li>
          <li className={styles.contents_li}>
            <a href={`#applications`}>Applications and Contact pages</a>
          </li>
          <li className={styles.contents_li}>
            <a href={`#roster`}>Roster page</a>
          </li>
          <li className={styles.contents_li}>
            <a href={`#faqandwallpapers`}>Faq and Wallpaper pages</a>
          </li>
          <li className={styles.contents_li}>
            <a href={`#cms`}>Content Management System overview</a>
          </li>
          <li className={styles.contents_li}>
            <a href={`#deployment`}>Setting up and deploying the server</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default PulseClanWebsite;
