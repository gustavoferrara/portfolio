import Link from 'next/link';

import styles from '../styles/landingPage.module.scss';

const LandingPage: React.FC = () => {
  type ITechnologiesList = Array<{
    technologyName: string;
    imageLink: string;
    type: 'frontend' | 'backend' | 'design';
  }>;

  const technologiesList: ITechnologiesList = [
    {
      technologyName: 'HTML 5',
      imageLink: '/technologies/html.svg',
      type: 'frontend',
    },
    {
      technologyName: 'CSS 3',
      imageLink: '/technologies/css.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Javascript',
      imageLink: '/technologies/js.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Typescript',
      imageLink: '/technologies/ts.svg',
      type: 'frontend',
    },
    {
      technologyName: 'React',
      imageLink: '/technologies/react.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Next.JS',
      imageLink: '/technologies/nextjs.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Sass',
      imageLink: '/technologies/sass.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Post CSS',
      imageLink: '/technologies/postcss.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Git',
      imageLink: '/technologies/git.svg',
      type: 'frontend',
    },
    {
      technologyName: 'Webpack',
      imageLink: '/technologies/webpack.svg',
      type: 'frontend',
    },
    {
      technologyName: 'NodeJS - Express',
      imageLink: '/technologies/node-express.svg',
      type: 'backend',
    },
    {
      technologyName: 'MongoDB',
      imageLink: '/technologies/mongodb.svg',
      type: 'backend',
    },
    {
      technologyName: 'Nginx',
      imageLink: '/technologies/nginx.svg',
      type: 'backend',
    },
    {
      technologyName: 'Figma',
      imageLink: '/technologies/figma.svg',
      type: 'design',
    },
    {
      technologyName: 'Adobe Photoshop',
      imageLink: '/technologies/photoshop.svg',
      type: 'design',
    },
    {
      technologyName: 'Adobe Illustrator',
      imageLink: '/technologies/illustrator.svg',
      type: 'design',
    },
  ];

  return (
    <main id={styles.home_wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.hero_heading}>
          I&apos;m Gustavo Ferrara <span>Full-stack developer</span>
        </h1>
        <img src='/logoherosection.svg' alt='' className={styles.hero_logo} />
        <img
          src='/logoherosectionmobile.svg'
          alt=''
          className={styles.hero_logo_mobile}
        />
      </section>
      <section className={styles.technologies}>
        <h2 className={styles.technologies_heading}>
          I work with these technologies
        </h2>
        <div className={styles.technologies_container}>
          <p className={styles.technologies_container_sectiontitle}>
            Front-end
          </p>
          <div className={styles.technologies_container_grid}>
            {technologiesList
              .filter(item => item.type === 'frontend')
              .map(item => (
                <div
                  className={styles.technologies_container_grid_item}
                  key={item.imageLink}
                >
                  <img src={item.imageLink} alt='' />
                  <p>{item.technologyName}</p>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.technologies_container}>
          <p className={styles.technologies_container_sectiontitle}>Back-end</p>
          <div className={styles.technologies_container_grid}>
            {technologiesList
              .filter(item => item.type === 'backend')
              .map(item => (
                <div
                  className={styles.technologies_container_grid_item}
                  key={item.imageLink}
                >
                  <img src={item.imageLink} alt='' />
                  <p>{item.technologyName}</p>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.technologies_container}>
          <p className={styles.technologies_container_sectiontitle}>Design</p>
          <div className={styles.technologies_container_grid}>
            {technologiesList
              .filter(item => item.type === 'design')
              .map(item => (
                <div
                  className={styles.technologies_container_grid_item}
                  key={item.imageLink}
                >
                  <img src={item.imageLink} alt='' />
                  <p>{item.technologyName}</p>
                </div>
              ))}
          </div>
        </div>
        <p className={styles.technologies_paragraph}>
          ...and more! I&apos;m always eager to learn new tools which make me a
          better professional.
        </p>
      </section>
      <section id={styles.projects} className={styles.projects_bg}>
        <div className={styles.projects}>
          <h2 className={styles.projects_heading}>Projects</h2>
          <Link href={'/pulseclanwebsite'}>
            <a className={styles.projects_anchor}>
              <div className={styles.projects_container}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src='/pulseclanwebsite/preview.mp4'
                  className={styles.projects_container_video}
                  tabIndex={-1}
                ></video>
                <p className={styles.projects_container_description}>
                  Client work: Full-stack website with custom headless CMS,
                  restless API, authentication, authorization and more
                </p>
                <p className={styles.projects_container_cta}>View project</p>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
