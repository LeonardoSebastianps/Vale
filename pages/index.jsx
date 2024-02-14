import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TE AMO VAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="TE AMO!" />
        <div className="centered-image">
          <Image
            src="https://th.bing.com/th/id/R.731bd87a02ba92bd7a6fbc49d1dfeebd?rik=4ipz3gq9%2bvUUOA&pid=ImgRaw&r=0" // Replace with the path to your desired image
            alt="Centered Image"
            width={400}
            height={300}
          />
        </div>
        <div className="text-container">
          <p>Te amo</p>
          <p>¿Quieres casarte conmigo?</p>
        </div>
        <div className="button-container">
          <button>Sí</button>
          <button>No</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
