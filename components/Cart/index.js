import CartItem from 'components/CartItem';
import CartItemActionsBar from 'components/CartItemActionsBar';
import CartQuantity from 'components/CartQuantity';
import { PageTitle, TotalItems } from './elements';

export default function Cart() {
  return (
    <div className="col-lg-6">
      <PageTitle>YOUR BAG</PageTitle>
      <TotalItems>
        TOTAL: (1 item)
        <strong>$180</strong>
      </TotalItems>
      <main>
        <CartItem actionsBar={<CartItemActionsBar />}>
          <CartQuantity />
        </CartItem>
      </main>
    </div>
  );
}
