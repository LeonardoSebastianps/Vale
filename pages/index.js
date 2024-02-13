import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TE AMO VAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to my app!" />
        <div className={styles.imageContainer}>
          <img src="/path/to/your/image.jpg" alt="Your Image" className={styles.image} />
          <h2 className={styles.text}>Te amo</h2>
        </div>
        <p className={styles.description}>
          Si es que quiere casarse conmigo
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Si</button>
          <button className={styles.button}>No</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
