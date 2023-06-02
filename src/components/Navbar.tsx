import styles from '@/styles/navbar.module.scss';

const Navbar = () => {
  // const toggleMobileNavbar = () => {};

  return (
    <header id={styles.header}>
      <nav id={styles.navbar}>
        <button className={styles.navbar_homebtn}>
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
