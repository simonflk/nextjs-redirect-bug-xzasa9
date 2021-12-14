import Link from 'next/link';
import { useRouter } from 'next/router';

export function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {/* See next.config.js */}
          <Link href="/content">/content (redirects to /content/alpha)</Link>
        </li>
        <li>
          <Link href="/content/alpha">/content/alpha</Link>
        </li>
        <li>
          <Link href="/content/beta">/content/beta</Link>
        </li>
      </ul>
    </nav>
  );
}
