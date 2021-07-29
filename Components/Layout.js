import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyle from '../utils/styles';

export default function Layout({ children }) {
  // we use {children} fro see everything tag into <Layout> tag in the index.js
  const classes = useStyle();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved . Next Amazona.</Typography>
      </footer>
    </div>
  );
}
