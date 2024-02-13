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
        <Header title="Te amo Valeria Lizbeth Granados Robles" />
        <div className={styles.imageContainer}>
          <img src="https://i.pinimg.com/originals/21/a8/51/21a851b0616cfd12f1ec564c742af990.jpg" alt="Nosotros Miamor" className={styles.image} />
          <h2 className={styles.text}>Te amo</h2>
        </div>
        <p className={styles.description}>
          Quieres casarte conmigo??
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
