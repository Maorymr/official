import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Home({ Component, pageProps }) {
    return (
        <>
            <header>
                <div className={styles.header}>
                    <div>
                        Page 1 Page 2

                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} type="text" placeholder='Maory' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.glass} />  
                    </div>
                    <div>Account</div>
                </div>
            </header>
        </>
    );
}

export default Home;
