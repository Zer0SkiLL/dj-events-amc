import '@assets/css/bootstrap.min.css';
import '@assets/css/style.css';
import '@assets/css/fontawesome-all.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Script from 'next/script'

//Modal Video
import 'react-modal-video/scss/modal-video.scss';
import Head from 'next/head';
import { Fragment } from 'react';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@context/AuthContext';

import { API_URL } from '@config/index';

import Navbar from '@layout/Header/Navbar'

function MyApp({ Component, pageProps, logo }) {
  console.log(logo)
  return (
    <Fragment>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        
      </Head>
      <AuthProvider>
        <Navbar/>      
        <ToastContainer position="bottom-right"></ToastContainer>
        <Component {...pageProps} />
      </AuthProvider>
    </Fragment>
  );
}

export async function getServerSideProps() {
    const res = await fetch(
        `${API_URL}/api/logo?populate=*`
    );
    console.log('here')
    console.log(res)
    const json = await res.json();
    const logo = json;

    return {
        props: {
            logo: logo
        },
    };
}

export default MyApp;


