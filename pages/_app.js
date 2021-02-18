import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof window !== "undefined") {
  require('bootstrap');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
