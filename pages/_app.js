/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap-grid.scss';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
};
