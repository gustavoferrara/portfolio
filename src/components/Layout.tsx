import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Navbar from './Navbar';
import RouteTransition from './RouteTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentUrl = `https://gustavoferrara.github.io${router.pathname}`;

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:url' content={currentUrl} key='ogurl' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          href='/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link rel='canonical' href={currentUrl} />
        <meta name='og:locale' property='og:locale' content='en' />
        <meta
          name='og:site_name'
          property='og:site_name'
          content='Gustavo Ferrara - Full-stack developer'
        />
        <meta name='og:type' property='og:type' content='website' />
        <meta content='#cfd4e4' name='theme-color' />
      </Head>
      <div id='wrapper'>
        <RouteTransition />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
