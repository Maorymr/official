import styles from '../styles/Home.module.css';
import Head from 'next/head';

function Home({ Component, pageProps }) {
  return (
    <>
    <ComponantHome></ComponantHome>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Home;
