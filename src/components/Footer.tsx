import { useRef, useState } from 'react';

import styles from '@/styles/footer.module.scss';

const Footer = () => {
  const [userCopiedToClipboard, setUserCopiedToClipboard] = useState(false);
  const email = useRef<HTMLButtonElement | null>(null);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email.current!.innerText);

    setUserCopiedToClipboard(true);

    setTimeout(() => {
      setUserCopiedToClipboard(false);
    }, 2000);
  };

  return (
    <footer id={styles.footer}>
      <p className={styles.title}>You can find me at</p>
      <button
        ref={email}
        onClick={copyEmailToClipboard}
        className={`${styles.email} ${
          userCopiedToClipboard
            ? styles['email_tooltip-copied']
            : styles['email_tooltip-copy']
        }`}
      >
        gustavoferraradev@gmail.com
      </button>
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
