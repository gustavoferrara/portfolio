import styles from '../styles/landingPage.module.scss';

const LandingPage: React.FC = () => {
  return (
    <main className={styles.home_wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.hero_heading}>I&apos;m Gustavo Ferrara</h1>
        <h2 className={styles.hero_subheading}>Full-stack developer</h2>
        <img src='/logo.svg' alt='' />
      </section>
    </main>
  );
};

export default LandingPage;
