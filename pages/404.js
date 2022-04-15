import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PageError = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    }, )
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

export default PageError;
