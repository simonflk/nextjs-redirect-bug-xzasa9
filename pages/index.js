import Head from 'next/head';
import { Nav } from '../components/nav';

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
