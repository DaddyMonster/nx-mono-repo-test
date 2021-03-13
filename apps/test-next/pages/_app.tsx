import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import {
  SparkThemeProvider,
  createSparkTheme,
  SparkClientTypes,
} from '@nx-test/styles/theme';
import useApollo from '../lib/ApolloNext';
import '../../../global/css/fonts.css';
import '../styles/next.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const theme = createSparkTheme(SparkClientTypes.Lite);
  const apolloClient = useApollo(pageProps);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to test-next!</title>
      </Head>
      <SparkThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SparkThemeProvider>
    </>
  );
}

export default CustomApp;
