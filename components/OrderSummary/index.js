import { OrderSummaryContainer, OrderSummaryItem, OrderSummaryTitle } from './elements';

export default function OrderSummary() {
  return (
    <OrderSummaryContainer>
      <OrderSummaryTitle>ORDER SUMMARY</OrderSummaryTitle>
      <OrderSummaryItem>
        <span>4 ITEMS</span>
        <span>$570.00</span>
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
        <strong>$570.00</strong>
      </OrderSummaryItem>
    </OrderSummaryContainer>
  );
}
