import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { ThemeProvider as MaterialUiProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../themes/dark';
import { Divider } from '@material-ui/core';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

<<<<<<< HEAD
  checkSession(){
    fetch("/api/db/session")
      .then(r => {
        console.log(JSON.stringify(r));
        const {user_id} = r.json();
        console.log(user_id);
        if (!r.user_id){
          return false;
        } else {
          return true;
        }
      });
  };
  


  render() {
    const isLoggedIn = this.checkSession();
    if (isLoggedIn){
      return (
        <h1>Please log in</h1>
      )
    } else {
      const { Component, pageProps } = this.props;
      return (
        <>
          <Head>
            <title>auto arbi-trader</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <meta name="theme-color" content={theme.palette.primary.main} />
            <link
              rel="preload"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
              as="font"
            />
            <script src="https://www.typingdna.com/scripts/typingdna.js"></script>
          </Head>
          <StyledComponentProvider theme={theme}>
            <MaterialUiProvider theme={theme}>
              <StylesProvider injectFirst>
                <CssBaseline />
                <Component {...pageProps} />
              </StylesProvider>
            </MaterialUiProvider>
          </StyledComponentProvider>
        </>
      );
    }
=======


  render() {
    const { Component, pageProps } = this.props;

    

    return (
      <>
        <Head>
          <title>auto arbi-trader</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            as="font"
          />
          <script src="https://www.typingdna.com/scripts/typingdna.js"></script>
        </Head>
        <StyledComponentProvider theme={theme}>
          <MaterialUiProvider theme={theme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </MaterialUiProvider>
        </StyledComponentProvider>
      </>
    );
>>>>>>> 3454d6ff1ffc71a3fc0a81b8208ab98238ccd73b
  }
}
