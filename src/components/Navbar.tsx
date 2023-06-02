import { useRouter } from 'next/router';

import styles from '@/styles/navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  // const toggleMobileNavbar = () => {};

  const scrollToElement = (element: Element) => {
    const navbarOffset = 45;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleHomeButtonClick = () => {
    if (router.pathname === '/') {
      const heroSection = document.querySelector('.landingPage_hero__yOqZh')!;

      scrollToElement(heroSection);
    } else router.push('/');
  };

  return (
    <header id={styles.header}>
      <nav id={styles.navbar}>
        <button
          onClick={handleHomeButtonClick}
          className={styles.navbar_homebtn}
        >
          <img src='/logo.svg' alt='' />
        </button>
        <button className={styles.navbar_hamburgerbtn}>
          <img src='/navbar/hamburgermenu.svg' alt='' />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
