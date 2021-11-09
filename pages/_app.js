import '../styles/globals.css';
import { useEffect } from 'react';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyle = document.querySelector('jss-server-side');
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
