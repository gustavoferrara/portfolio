import { useRouter } from 'next/router';
import { useRef } from 'react';

import scrollToElement from '@/helpers/scrollToElement';
import styles from '@/styles/navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const mobileNavbar = useRef<HTMLElement | null>(null);

  const handleHomeButtonClick = () => {
    if (router.pathname === '/') {
      const heroSection = document.querySelector('.landingPage_hero__yOqZh')!;

      scrollToElement(heroSection);
    } else router.push('/');
  };

  const toggleMobileNavbar = (action: 'show' | 'hide') => {
    if (action === 'show') {
      mobileNavbar.current!.style.display = 'flex';

      setTimeout(() => {
        mobileNavbar.current!.style.opacity = '1';
      }, 1);
    } else {
      mobileNavbar.current!.style.opacity = '0';

      setTimeout(() => {
        mobileNavbar.current!.style.display = 'none';
      }, 125);
    }
  };

  const handleNavButtonClick = async (
    sectionClass: string,
    navbarType: 'mobile' | 'desktop',
  ) => {
    if (router.pathname !== '/' && sectionClass !== 'footer')
      await router.push('/');

    const checkSection = () => {
      const section = document.querySelector(sectionClass);

      if (!section) setTimeout(checkSection, 200);
      else {
        navbarType === 'mobile' && toggleMobileNavbar('hide');
        scrollToElement(section);
      }
    };

    checkSection();
  };

  return (
    <header id={styles.header}>
      <nav ref={mobileNavbar} className={styles.mobile_navmenu}>
        <button
          onClick={() => toggleMobileNavbar('hide')}
          className={styles.mobile_navmenu_close}
        >
          <img src='/navbar/close.svg' alt='' />
        </button>
        <button
          onClick={() =>
            handleNavButtonClick('.landingPage_technologies__yiObY', 'mobile')
          }
          className={styles.mobile_navmenu_btn}
        >
          Tech stack
        </button>
        <button
          onClick={() =>
            handleNavButtonClick('.landingPage_projects_bg__QMEX1', 'mobile')
          }
          className={styles.mobile_navmenu_btn}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavButtonClick('footer', 'mobile')}
          className={styles.mobile_navmenu_btn}
        >
          Find me
        </button>
      </nav>

      <nav id={styles.navbar}>
        <button
          onClick={handleHomeButtonClick}
          className={styles.navbar_homebtn}
          aria-label='Home button'
        >
          <img src='/logo.svg' alt='' />
        </button>
        <button
          onClick={() => toggleMobileNavbar('show')}
          className={styles.navbar_hamburgerbtn}
        >
          <img src='/navbar/hamburgermenu.svg' alt='' />
        </button>
        <span className={styles.navbar_desktop_items}>
          <button
            onClick={() =>
              handleNavButtonClick(
                '.landingPage_technologies__yiObY',
                'desktop',
              )
            }
          >
            Tech stack
          </button>
          <button
            onClick={() =>
              handleNavButtonClick('.landingPage_projects_bg__QMEX1', 'desktop')
            }
          >
            Projects
          </button>
          <button onClick={() => handleNavButtonClick('footer', 'desktop')}>
            Contact
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
