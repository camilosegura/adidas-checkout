import ButtonPay from 'components/ButtonPay';
import CartItem from 'components/CartItem';
import CartItemActionsBar from 'components/CartItemActionsBar';
import CartQuantity from 'components/CartQuantity';
import { Or, PageTitle, TotalItems } from './elements';

export default function Cart() {
  return (
    <div className="row">
      <div className="col-lg-24">
        <PageTitle>YOUR BAG</PageTitle>
        <TotalItems>
          TOTAL: (1 item)
          <strong>$180</strong>
        </TotalItems>
      </div>
      <main className="col-lg-16">
        <CartItem actionsBar={<CartItemActionsBar />}>
          <CartQuantity />
        </CartItem>
      </main>
      <aside className="col-lg-8">
        <ButtonPay />
        <Or>OR</Or>
        <ButtonPay payPal />
      </aside>
    </div>
  );
}
