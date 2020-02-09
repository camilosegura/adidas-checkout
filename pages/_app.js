/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap-grid.scss';
import Layout from 'components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pangram';
    src: url('/assets/fonts/AdihausDIN-Bold.woff2');
    src: url('/assets/fonts/AdihausDIN-Regular.woff2');
    src: url('/assets/fonts/adineuePRO-Bold.woff2');
    src: url('/assets/fonts/adineuePRO-Regular.woff2');
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
