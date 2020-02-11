/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import '../styles/bootstrap-grid.scss';
import Layout from 'components/Layout';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';

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
    text-transform: uppercase;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: AdineuePRO,Helvetica,Arial,sans-serif
  }
`;

function App({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Layout>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Layout>
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object.isRequired,
};

export default withRedux(createStore)(withReduxSaga(App));
