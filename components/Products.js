import styles from '../styles/Home.module.css';
import Head from 'next/head';

function Jamis({ Component, pageProps }) {
  return (
    <>
    <ComponantProducts></ComponantProducts>
      <Head>
        <title>RevMédia</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Jamis;
