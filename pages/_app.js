/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap-grid.scss';
import Layout from 'components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AdihausDIN';
    src: url('/fonts/AdihausDIN-Bold.woff2');
    src: url('/fonts/AdihausDIN-Regular.woff2');
  }

  @font-face {
    font-family: 'adineuePRO';
    src: url('/fonts/adineuePRO-Bold.woff2');
    src: url('/fonts/adineuePRO-Regular.woff2');
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
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
