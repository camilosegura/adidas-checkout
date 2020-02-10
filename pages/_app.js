/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import '../styles/bootstrap-grid.scss';
import Layout from 'components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AdihausDIN';
    src: url('/fonts/AdihausDIN-Bold.woff2');
    src: url('/fonts/AdihausDIN-Regular.woff2');
  }

  @font-face {
    font-family: 'AdineuePRO';
    src: url('/fonts/adineuePRO-Bold.woff2');
    src: url('/fonts/adineuePRO-Regular.woff2');
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: #000;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: AdineuePRO,Helvetica,Arial,sans-serif
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </Layout>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
