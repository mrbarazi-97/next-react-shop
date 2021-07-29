import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyle = document.querySelector('jss-server-side');
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
