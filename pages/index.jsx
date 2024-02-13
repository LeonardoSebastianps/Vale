import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

const images = [
  'https://i.pinimg.com/originals/21/a8/51/21a851b0616cfd12f1ec564c742af990.jpg',
  'https://th.bing.com/th/id/OIP.2qLwfobRTgrDZWbvmndZxgHaEb?rs=1&pid=ImgDetMain',
];

const sizes = ['100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%'];

export default function Home() {
  const [answer, setAnswer] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [noButtonSize, setNoButtonSize] = useState('100%');

  const handleAnswer = (newAnswer) => {
    setAnswer(newAnswer);
    setImageIndex((imageIndex + 1) % images.length);
    setNoButtonSize(sizes[sizes.length - 1]);
  };

  const handleNoButtonClick = () => {
    setNoButtonSize(sizes[sizes.indexOf(noButtonSize) - 1]);
    handleAnswer('no');
  };

  return (
    <div className="container">
      <Head>
        <title>TE AMO VAL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="TE AMO!" />
        {!answer ? (
          <>
            <p className="description">
               ¿Quieres casarte conmigo?
            </p>
            <div className="centered-image">
              <img src={images[imageIndex]} alt="Centered Image" />
            </div>
          </>
        ) : (
          <p>You answered: {answer}</p>
        )}
        <div className="button-container">
          {!answer && (
            <>
              <button style={{ width: noButtonSize }} onClick={() => handleAnswer('yes')}>
                Yes
              </button>
              <button style={{ width: noButtonSize }} onClick={handleNoButtonClick}>
                No
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
