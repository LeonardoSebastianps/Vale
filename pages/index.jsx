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
            src="https://th.bing.com/th/id/R.04c06bd97b02d9d9c7cecbde32ea6bfd?rik=fsM8Oy%2b8Ut%2fCzw&riu=http%3a%2f%2fimg.ezday.co.kr%2fcache%2fscreen%2fimages%2f44%2f78895_800.gif&ehk=ynz1q1hwYop9FgC60TbvoLe7vj0weeHh2tsKUeK9WFQ%3d&risl=&pid=ImgRaw&r=0"
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
