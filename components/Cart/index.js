import ButtonsPay from 'components/ButtonsPay';
import CartItem from 'components/CartItem';
import CartItemActionsBar from 'components/CartItemActionsBar';
import CartQuantity from 'components/CartQuantity';
import {
  ButtonsPayContainer, PageHeader, PageTitle, TotalItems,
} from './elements';

export default function Cart() {
  return (
    <div className="row">
      <PageHeader className="col-lg-24">
        <PageTitle>YOUR BAG</PageTitle>
        <TotalItems>
          TOTAL: (1 item)
          <strong>$180</strong>
        </TotalItems>
      </PageHeader>
      <main className="col-lg-16">
        <CartItem actionsBar={<CartItemActionsBar />}>
          <CartQuantity />
        </CartItem>
        <ButtonsPayContainer>
          <ButtonsPay />
        </ButtonsPayContainer>
      </main>
      <aside className="col-lg-8">
        <ButtonsPay />
      </aside>
    </div>
  );
}
