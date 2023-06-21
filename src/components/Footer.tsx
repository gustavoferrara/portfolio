import styles from '@/styles/footer.module.scss';

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p className={styles.title}>You can find me at</p>
      <a href='mailto:gustavoferraradev@gmail.com' className={styles.email}>
        gustavoferraradev@gmail.com
      </a>
      <a
        className={styles.curriculum}
        href='https://placeholdercv.com'
        target='_blank'
        rel='noreferrer'
      >
        My curriculum &nbsp;&nbsp;
      </a>
      <a
        className={styles.socialmedia}
        href='https://github.com/gustavoferrara'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={styles.socialmedia_icon}
          src='/socialmedia/github.svg'
          alt='github'
        />
      </a>
      <a
        className={styles.socialmedia}
        href='https://github.com/gustavoferrara'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={styles.socialmedia_icon}
          src='/socialmedia/linkedin.svg'
          alt='linkedin'
        />
      </a>

      <p className={styles.copyright}>
        &copy; 2023 Gustavo Ferrara. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
