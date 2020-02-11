import PropTypes from 'prop-types';
import { OrderSummaryContainer, OrderSummaryItem, OrderSummaryTitle } from './elements';

export default function OrderSummary({ totalItems, totalPrice }) {
  return (
    <OrderSummaryContainer>
      <OrderSummaryTitle>ORDER SUMMARY</OrderSummaryTitle>
      <OrderSummaryItem>
        <span>{`${totalItems} ITEMS`}</span>
        <span>{`$${totalPrice}.00`}</span>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <span>DELIVERY</span>
        <span>FREE</span>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <span>Sales Tax</span>
        <span>-</span>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <strong>TOTAL</strong>
        <strong>{`$${totalPrice}.00`}</strong>
      </OrderSummaryItem>
    </OrderSummaryContainer>
  );
}

OrderSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
