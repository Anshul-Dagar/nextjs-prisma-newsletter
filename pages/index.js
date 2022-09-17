import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Don't miss any updates</h1>
        <div className={styles.spacer}></div>
        <p className={styles.desc}>
          Get the latest content in your inbox everyday.
        </p>
        <form action="/api/form" method="post">
          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            placeholder="Enter your email"
          />
          <button className={styles.button}>Submit</button>
        </form>
      </main>
    </div>
  );
}
