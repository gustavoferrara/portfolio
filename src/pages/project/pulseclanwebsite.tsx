import Head from 'next/head';
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

  const scrollToTop = (scrollBehavior: 'smooth' | 'instant') => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior as ScrollBehavior,
    });
  };

  useEffect(() => {
    scrollToTop('instant');
    checkBackToTopBtn();
    window.addEventListener('scroll', checkBackToTopBtn);

    return () => {
      window.removeEventListener('scroll', checkBackToTopBtn);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Project: Website for Pulse Clan</title>
        <meta name='og:title' content='Project: Website for Pulse Clan' />
        <meta
          content='Full-stack MERN website for Pulse Clan, an international gaming organization with over 500k followers across social media.'
          name='description'
        />
        <meta
          content='Full-stack MERN website for Pulse Clan, an international gaming organization with over 500k followers across social media.'
          property='og:description'
        />
        <meta itemProp='name' content='Project: Website for Pulse Clan' />
        <meta
          itemProp='description'
          content='Full-stack MERN website for Pulse Clan, an international gaming organization with over 500k followers across social media.'
        />
      </Head>
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

        {/* <a
          href='https://github.com/gustavoferrara/pulseclan-website'
          target='_blank'
          rel='noreferrer'
          className={styles.cta_secondary}
        >
          View repository
        </a> */}

        <p className={styles.techstack_paragraph}>Tech stack used</p>
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

          <p className={styles.paragraph}>
            Responsible for talking with the client, coordinating with
            designers, to developing and deploying the website.
          </p>

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
                &#x2022; Integrating authentication, authorization levels and
                restrictions within the CMS, allowing managers to add, remove
                and modify members and roster at will, among other features.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Building pages with features like carousels, accordions
                and animations.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Registering applications and contact form submissions
                to a database.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Making multiple parts of the website editable from the
                CMS by creating protected endpoints.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Integrating Discord webhooks for automatic submission
                of form applications to dedicated channels.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Implementing the Youtube API for automatic data
                retrieval and caching in the database.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Utilizing Twitch API to display information on active
                streamers and automatically refreshing its API credentials to
                ensure uninterrupted use without the need of maintenance.
              </li>
              <li className={styles.overview_li}>
                &#x2022; Deploying the website on a Linux system with Nginx,
                MongoDB and PM2.
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

          <section id='landingpage'>
            <h2 className={styles.heading}>Landing page</h2>
            <h3 className={styles.subheading}>Hero section</h3>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              In order to reduce the time it takes for the the background video
              to start playing once the page loaded, a video streaming endpoint
              was implemented in Express which allows the client to start
              playing the already downloaded chunks, while it downloads the rest
              of the file in the background.{' '}
            </p>
            <h3 className={styles.subheading}>
              News and social media sections
            </h3>
            <img
              src='/pulseclanwebsite/socialmedia.jpg'
              alt='Social media section'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>Social media section</p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              All of the numbers here are customizable through the CMS in order
              to be easily updated.
            </p>
            <img
              src='/pulseclanwebsite/news.jpg'
              alt='News section'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>News section</p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              The date, title, body, and image of the news section are also
              customizable through the CMS.
            </p>
            <img
              src='/pulseclanwebsite/cmsnews.jpg'
              alt='CMS form to update news'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>CMS form to update news</p>
            <img
              src='/pulseclanwebsite/cmssocialmedia.jpg'
              alt='CMS form to update social media numbers'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              CMS form to update social media numbers
            </p>
            <img
              src='/pulseclanwebsite/latestvideos.jpg'
              alt='Latest videos section'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>Latest videos section</p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              The content section is divided in two parts: latest videos and
              currently active streamers. For the latest videos part, the
              Youtube API is being used to provide that data automatically, but
              the catch is that said API has a daily limit, so we&apos;re
              caching the API responses in our database in order to circumvent
              that limitation. And whenever new videos are uploaded and the page
              needs to be updated, a simple button was added on the CMS
              dashboard which will hit an endpoint on the server to fetch new
              data from Youtube and update the database.
            </p>
            <img
              src='/pulseclanwebsite/activestreamers.jpg'
              alt='Currently active streamers section'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              Currently active streamers section
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              The Twitch API is being used to provide the currently active
              streamers. The full list of streamers to query from is taken from
              all followed users of a Twitch account created for this purpose
              only, meaning that if in the future the client wants to add/remove
              streamers who will be tracked by the website, they can simply
              follow/unfollow them on said account.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Also since that specific Twitch API endpoint doesn&apos;t provide
              the profile pictures of the active streamers, another endpoint has
              to be hit on our back-end in order to get the picture links for
              each streamer. I decided to divide these two calls into different
              endpoints in order to reduce initial load times for the landing
              page, as the front-end will only fetch the profile pictures after
              the page mounts and it verifies there are streamers online to
              display.
            </p>
            <p className={`${styles.paragraph}`}>
              Additionally, the credentials for the Twitch API endpoints the
              server is hitting expire after certain time. So another endpoint
              was needed in order to check for 401 (unauthorized) responses from
              Twitch, and if that&apos;s the case then it&apos;ll use a refresh
              token in order to generate new valid credentials, then update the
              environment variables both in the file and on runtime for future
              requests.
            </p>
          </section>
          <section id='applications'>
            <h2 className={styles.heading}>Application and contact pages</h2>
            <p className={`${styles.paragraph}`}>
              Pulse Clan has multiple roles open for recruiting, and each role
              has specific form fields and different requirements, so
              conditional rendering came in handy.{' '}
            </p>
            <img
              src='/pulseclanwebsite/applicationssidebyside.png'
              alt='Different fields and descriptions being rendered based on the
            selected applicant role'
              className={styles.project_img}
              style={{ borderRadius: '0' }}
            />
            <p className={styles.project_img_label}>
              Different fields and descriptions being rendered based on the
              selected applicant role
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              Once the applicant fills the form and sends it, the server takes
              the request and puts it in the database. Additionally by request
              of the client, each application is sent automatically to Discord
              channels for easier viewing. Discord makes this possible with
              their webhook implementation.{' '}
            </p>
            <img
              src='/pulseclanwebsite/discordwebhook.png'
              alt='Example of application being received on Discord via the Webhook
            implementation'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              Example of application being received on Discord via the Webhook
              implementation
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Each applicant role has a dedicated Webhook URL. This results in
              multiple Discord channels, where each channel receives applicant
              submissions for one designated role only.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              This process is very similar for the Contact page.
            </p>
            <img
              src='/pulseclanwebsite/contactpage.jpg'
              alt='Also both contact submissions and applications can be reviewed and
            deleted from the CMS'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>Contact page</p>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              Also both contact submissions and applications can be reviewed and
              deleted from the CMS
            </p>
            <img
              src='/pulseclanwebsite/applicationcms.png'
              alt='Received application seen from the CMS'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              Received application seen from the CMS
            </p>
          </section>
          <section id='roster'>
            <h2 className={styles.heading}>Roster page</h2>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              On the roster page each member displayed has an account registered
              where they can log in and alter all of their information displayed
              here such as their name, picture, modify their social media links
              and more. Also an expand / collapse button was added in order to
              avoid roster sections with too many members from making the page
              too cluttered.
            </p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/roster.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/roster.mp4'
            ></video>
            <p className={styles.project_img_label}>
              Expand / Collapse functionality to show all members of a roster
              section
            </p>
            <img
              src='/pulseclanwebsite/profilecms.jpg'
              alt='Form on the CMS where Pulse Clan members can alter their roster
            information'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              Form on the CMS where Pulse Clan members can alter their roster
              information
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Also, the “Roster Leads” shown on the website can add / remove /
              edit members from their respective section, edit the order in
              which the members appear on that section, and alter each
              members&apos; information for them.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Members from upper management can additionally promote / demote
              members into and out of management positions, and move members
              from one roster section to another.
            </p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/managemembers.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/managemembers.mp4'
            ></video>
            <p className={styles.project_img_label}>
              Demo showing the member managing page
            </p>
          </section>
          <section id='faqandwallpapers'>
            <h2 className={styles.heading}>Faq and Wallpaper pages</h2>
            <p className={`${styles.paragraph}`}>
              The Wallpaper and Faq pages are also consuming customizable data
              from our database.
            </p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/faq.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/faq.mp4'
            ></video>
            <p className={styles.project_img_label}>FAQ page</p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/wallpapers.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/wallpapers.mp4'
            ></video>
            <p className={styles.project_img_label}>Wallpapers page</p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/wallpaperscms.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/wallpaperscms.mp4'
            ></video>
            <p className={styles.project_img_label}>
              Wallpaper managing page on CMS
            </p>
            <video
              preload='none'
              poster='/pulseclanwebsite/videos/thumbnails/faqcms.jpg'
              className={styles.project_img}
              controls
              loop
              playsInline
              muted
              src='/pulseclanwebsite/videos/faqcms.mp4'
            ></video>
            <p className={styles.project_img_label}>Faq managing page on CMS</p>
          </section>
          <section id='cms'>
            <h2 className={styles.heading}>Content management system</h2>
            <p className={`${styles.paragraph} ${styles.paragraph_img_below}`}>
              There are many different roles within Pulse Clan with different
              levels of authorization, so i made a quick hierarchy graph for the
              CMS while in discussions with them.
            </p>
            <img
              src='/pulseclanwebsite/cmshierarchy.png'
              alt='Roster authorization hierarchy on CMS'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              Roster authorization hierarchy on CMS
            </p>
            <img
              src='/pulseclanwebsite/cmsdashboard.jpg'
              alt='CMS dashboard'
              className={styles.project_img}
            />
            <p className={styles.project_img_label}>
              CMS dashboard. Colored dots indicate which pages each user can
              access based on their role.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              This is one of the instances where the rendered layout and
              functionality are dictated by what authorization type the user
              has.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              On the “View applications” page, division leads can only see
              applications pertinent to their division (i.e the lead designer
              can only see designer applications and so on). Similarly, on the
              “Manage members” page, the division leads can only register new
              members pertinent to their own roster section on the website (i.e
              the lead editor can only add members to the editor roster and so
              on), and they can&apos;t assign or modify their management roles
              or anyone else&apos;s.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              I&apos;ve provided a general overview of this section since all
              other pages and endpoints have been covered in the sections above
              separately.
            </p>
          </section>
          <section id='deployment'>
            <h2 className={styles.heading}>
              Setting up and deploying the server
            </h2>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              We compared multiple options and services to host the website on,
              but ultimately decided on a Virtual Private Server with
              DigitalOcean, which provided all the flexibility that was needed.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Nginx is being used as the reverse proxy, PM2 to maintain the node
              process alive, and configured it to automatically start in case of
              system reboots. Lastly, a MongoDB instance was created for the
              backend to connect to.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraph_below}`}>
              Additionally Cloudflare was implemented as a layer of security and
              also to get some analytics.
            </p>
          </section>
        </div>
        <button
          ref={backToTopBtn}
          onClick={() => scrollToTop('smooth')}
          className={styles.backtotopbtn}
        >
          Back to top
        </button>
      </main>
    </>
  );
};

export default PulseClanWebsite;
