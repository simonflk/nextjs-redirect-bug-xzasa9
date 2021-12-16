// Solution
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AlphaPage from './alpha';

// Do a clientside navigation
export default function Solution() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/solution/alpha');
  }, [router]);

  // Return the destination page also
  return <AlphaPage />;
}

// I'm not using layout pattern here (https://nextjs.org/docs/basic-features/layouts),
// but if I were:
Solution.getLayout = AlphaPage.getLayout;
