// Importa el archivo CSS
import '../styles/styles.css';

// El resto de tu código _app.js
import Head from 'next/head'
import Footer from '@components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>TE AMO VAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}


export default MyApp
