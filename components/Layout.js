import PropTypes from 'prop-types';
import Header from 'components/Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
