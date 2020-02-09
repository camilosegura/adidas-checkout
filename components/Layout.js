import PropTypes from 'prop-types';
import Header from 'components/Header';
import ShippingBar from 'components/ShippingBar';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <ShippingBar />
      <div className="container">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
