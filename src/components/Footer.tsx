import styles from '@/styles/footer.module.scss';

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p className={styles.title}>You can find me at</p>
      <button className={styles.email}>gustavoferraradev@gmail.com</button>
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
    </footer>
  );
};

export default Footer;
