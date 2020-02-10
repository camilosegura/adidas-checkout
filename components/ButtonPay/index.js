
import PropTypes from 'prop-types';
import Button from './elements';
import Arrow from '../../public/arrow.svg';
import PayPal from '../../public/paypal.svg';

export default function ButtonPay({ payPal }) {
  return (
    <Button payPal={payPal}>
      {payPal ? <span><PayPal /></span> : <span>Go to checkout</span>}
      <Arrow />
    </Button>
  );
}

ButtonPay.propTypes = {
  payPal: PropTypes.bool.isRequired,
};
