import Link from 'next/link';
import { useEffect, useRef } from 'react';

import styles from '@/styles/landingPage.module.scss';

const LandingPage: React.FC = () => {
  const logoImgDesktop = useRef<HTMLImageElement | null>(null);
  const logoImgMobile = useRef<HTMLImageElement | null>(null);
  const frontendContainerOutline = useRef<HTMLDivElement | null>(null);
  const backendContainerOutline = useRef<HTMLDivElement | null>(null);
  const designContainerOutline = useRef<HTMLDivElement | null>(null);

  type ITechnologiesList = Array<{
    technologyName: string;
    imageLink: string;
    type: 'frontend' | 'backend' | 'design';
    outlineBorderColor: string;
  }>;

  const technologiesList: ITechnologiesList = [
    {
      technologyName: 'Typescript',
      imageLink: '/technologies/ts.svg',
      type: 'frontend',
      outlineBorderColor: '#3178c6',
    },
    {
      technologyName: 'React',
      imageLink: '/technologies/react.svg',
      type: 'frontend',
      outlineBorderColor: '#00b8d9',
    },
    {
      technologyName: 'Next.JS',
      imageLink: '/technologies/nextjs.svg',
      type: 'frontend',
      outlineBorderColor: '#000000',
    },
    {
      technologyName: 'Sass',
      imageLink: '/technologies/sass.svg',
      type: 'frontend',
      outlineBorderColor: '#cd6799',
    },
    {
      technologyName: 'Git',
      imageLink: '/technologies/git.svg',
      type: 'frontend',
      outlineBorderColor: '#f03c2e',
    },
    {
      technologyName: 'Webpack',
      imageLink: '/technologies/webpack.svg',
      type: 'frontend',
      outlineBorderColor: '#8ed6fb',
    },
    {
      technologyName: 'HTML 5',
      imageLink: '/technologies/html.svg',
      type: 'frontend',
      outlineBorderColor: '#f16529',
    },
    {
      technologyName: 'CSS 3',
      imageLink: '/technologies/css.svg',
      type: 'frontend',
      outlineBorderColor: '#3c9cd7',
    },
    {
      technologyName: 'Javascript',
      imageLink: '/technologies/js.svg',
      type: 'frontend',
      outlineBorderColor: '#f7df1e',
    },
    {
      technologyName: 'Post CSS',
      imageLink: '/technologies/postcss.svg',
      type: 'frontend',
      outlineBorderColor: '#000000',
    },
    {
      technologyName: 'NodeJS - Express',
      imageLink: '/technologies/node-express.svg',
      type: 'backend',
      outlineBorderColor: '#83cd29',
    },
    {
      technologyName: 'MongoDB',
      imageLink: '/technologies/mongodb.svg',
      type: 'backend',
      outlineBorderColor: '#12924f',
    },
    {
      technologyName: 'Nginx',
      imageLink: '/technologies/nginx.svg',
      type: 'backend',
      outlineBorderColor: '#009900',
    },
    {
      technologyName: 'Figma',
      imageLink: '/technologies/figma.svg',
      type: 'design',
      outlineBorderColor: '#ff7262',
    },
    {
      technologyName: 'Adobe Photoshop',
      imageLink: '/technologies/photoshop.svg',
      type: 'design',
      outlineBorderColor: '#31a8ff',
    },
    {
      technologyName: 'Adobe Illustrator',
      imageLink: '/technologies/illustrator.svg',
      type: 'design',
      outlineBorderColor: '#ff9a00',
    },
  ];

  const resizeHeroSectionLogoImage = () => {
    let logoImg: HTMLImageElement;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 1000) logoImg = logoImgDesktop.current!;
    else logoImg = logoImgMobile.current!;

    const aspectRatio = logoImg.naturalWidth / logoImg.naturalHeight;

    let imageWidth = screenWidth;
    let imageHeight = screenWidth / aspectRatio;

    if (imageHeight < screenHeight) {
      imageHeight = screenHeight;
      imageWidth = screenHeight * aspectRatio;
    }

    if (imageWidth < screenWidth * 1.1 && imageHeight > screenHeight * 1.1) {
      imageWidth = screenWidth * 1.1;
      imageHeight = imageWidth / aspectRatio;
    }

    logoImg.style.width = imageWidth + 'px';
    logoImg.style.height = imageHeight + 'px';
  };

  const handleTechnologyItemMouseHover = (
    event: React.MouseEvent<HTMLDivElement>,
    mouseAction: 'enter' | 'leave',
    technologySectionContainer: HTMLDivElement,
  ) => {
    if (mouseAction === 'leave') {
      technologySectionContainer.style.border = '3px solid #edf1ff';
      technologySectionContainer.style.boxShadow = `0px 0px 20px #00000018`;
      return;
    }

    const selectedTechnologyName = (event.target as HTMLElement).innerText;

    const selectedBorderColor = technologiesList.find(
      tech => tech.technologyName === selectedTechnologyName,
    )?.outlineBorderColor;

    technologySectionContainer.style.border = `3px solid ${selectedBorderColor}`;
    technologySectionContainer.style.boxShadow = `0px 0px 15px ${
      selectedBorderColor !== '#000000' ? selectedBorderColor : '#00000018'
    }`;
  };

  useEffect(() => {
    resizeHeroSectionLogoImage();

    window.addEventListener('resize', resizeHeroSectionLogoImage);
    return () => {
      window.removeEventListener('resize', resizeHeroSectionLogoImage);
    };
  }, []);

  return (
    <main id={styles.home_wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.hero_heading}>
          I&apos;m Gustavo Ferrara <span>Full-stack developer</span>
        </h1>
        <img
          ref={logoImgDesktop}
          src='/logoherosection.svg'
          alt=''
          className={styles.hero_logo}
        />
        <img
          ref={logoImgMobile}
          src='/logoherosectionmobile.svg'
          alt=''
          className={styles.hero_logo_mobile}
        />
      </section>
      <section className={styles.technologies}>
        <h2 className={styles.technologies_heading}>
          I work with these technologies
        </h2>
        <div
          ref={frontendContainerOutline}
          className={styles.technologies_container}
        >
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
                  onMouseEnter={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'enter',
                      frontendContainerOutline.current!,
                    )
                  }
                  onMouseLeave={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'leave',
                      frontendContainerOutline.current!,
                    )
                  }
                >
                  <img src={item.imageLink} alt='' />
                  <p>{item.technologyName}</p>
                </div>
              ))}
          </div>
        </div>
        <div
          ref={backendContainerOutline}
          className={styles.technologies_container}
        >
          <p className={styles.technologies_container_sectiontitle}>Back-end</p>
          <div className={styles.technologies_container_grid}>
            {technologiesList
              .filter(item => item.type === 'backend')
              .map(item => (
                <div
                  className={styles.technologies_container_grid_item}
                  key={item.imageLink}
                  onMouseEnter={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'enter',
                      backendContainerOutline.current!,
                    )
                  }
                  onMouseLeave={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'leave',
                      backendContainerOutline.current!,
                    )
                  }
                >
                  <img src={item.imageLink} alt='' />
                  <p>{item.technologyName}</p>
                </div>
              ))}
          </div>
        </div>
        <div
          ref={designContainerOutline}
          className={styles.technologies_container}
        >
          <p className={styles.technologies_container_sectiontitle}>Design</p>
          <div className={styles.technologies_container_grid}>
            {technologiesList
              .filter(item => item.type === 'design')
              .map(item => (
                <div
                  className={styles.technologies_container_grid_item}
                  key={item.imageLink}
                  onMouseEnter={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'enter',
                      designContainerOutline.current!,
                    )
                  }
                  onMouseLeave={e =>
                    handleTechnologyItemMouseHover(
                      e,
                      'leave',
                      designContainerOutline.current!,
                    )
                  }
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
