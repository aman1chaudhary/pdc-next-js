import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/responsive.css'
import Preloader from '../components/Preloader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? <Preloader /> : <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
      }

    </div>

  )
}

export default MyApp
