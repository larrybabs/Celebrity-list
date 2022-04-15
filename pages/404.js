import Link from 'next/link';

const pageError = () => {
  return (
    <div className="not-found">
      <h1> Ooooooops</h1>
      <p>Page not found</p>
      <p>Go back to  
          <Link href="/">
              <a>Homepage</a>
              </Link>
              </p>
    </div>
  );
}

export default pageError;
