import styles from '../styles/Home.module.css';
import Header from './Header';


export default function ComponantHome() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
      
          RevMédia 
        </h1>
      </main>
    </div>
  );
}


