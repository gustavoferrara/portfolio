import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import styles from '@/styles/RouteTransition.module.scss';

const RouteTransition: React.FC = () => {
  const router = useRouter();
  const transitionContainer = useRef<HTMLDivElement>(null);

  const animationStart = () => {
    transitionContainer.current!.style.display = 'flex';
    transitionContainer.current!.style.clipPath =
      'polygon(0 100%, 100% 100%, 100% 0, 0 0)';
  };

  const animationEnd = () => {
    transitionContainer.current!.style.clipPath =
      'polygon(0 100%, 100% 100%, 100% 99%, 0 99%)';

    setTimeout(() => {
      transitionContainer.current!.style.display = 'none';

      transitionContainer.current!.style.clipPath =
        'polygon(0 0, 100% 0%, 100% 1%, 0 1%)';
    }, 450);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', animationStart);
    router.events.on('routeChangeComplete', animationEnd);
    router.events.on('routeChangeError', animationStart);

    return () => {
      router.events.off('routeChangeStart', animationStart);
      router.events.off('routeChangeComplete', animationEnd);
      router.events.off('routeChangeError', animationStart);
    };
  }, [router]);

  return (
    <div
      ref={transitionContainer}
      aria-hidden
      className={styles.transition_container}
    >
      <svg className={styles.spinner} viewBox='0 0 50 50'>
        <circle
          className={styles.path}
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='5'
        ></circle>
      </svg>
    </div>
  );
};

export default RouteTransition;
