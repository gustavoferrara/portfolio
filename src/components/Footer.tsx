import { useRef, useState } from 'react';

import styles from '@/styles/footer.module.scss';

const Footer = () => {
  const [userCopiedToClipboard, setUserCopiedToClipboard] = useState(false);
  const email = useRef<HTMLButtonElement | null>(null);

  const copyEmailToClipboard = (
    event?: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (
      event &&
      (event.code === 'Tab' ||
        event.code === 'ShiftLeft' ||
        event.code === 'ShiftRight')
    )
      return;

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
        // @ts-ignore
        onClick={copyEmailToClipboard}
        onKeyDown={e => copyEmailToClipboard(e)}
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

      <p className={styles.copyright}>
        &copy; 2023 Gustavo Ferrara. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
