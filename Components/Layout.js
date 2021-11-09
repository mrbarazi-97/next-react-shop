import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import useStyle from '../utils/styles';

export default function Layout({ title, description, children }) {
  // we use {children} fro see everything tag into <Layout> tag in the index.js
  const classes = useStyle();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0 ',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0 ',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Azarland` : 'Azarland'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Azarland</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved . Azarland .</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
