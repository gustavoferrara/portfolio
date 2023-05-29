import Link from 'next/link';

const PageNotFound: React.FC = () => {
  return (
    <main>
      <h1>Whoops... page not found</h1>
      <Link href={'/'}>
        <a>Back to the home page</a>
      </Link>
    </main>
  );
};

export default PageNotFound;
