import CartItem from 'components/CartItem';
import CartItemActionsBar from 'components/CartItemActionsBar';
import { PageTitle, TotalItems } from './elements';

export default function Cart() {
  return (
    <main>
      <PageTitle>YOUR BAG</PageTitle>
      <TotalItems>
        TOTAL: (1 item)
        <strong>$180</strong>
      </TotalItems>
      <CartItem actionsBar={<CartItemActionsBar />}>
        QTY
      </CartItem>
    </main>
  );
}
