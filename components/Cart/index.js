import CartItem from 'components/CartItem';
import { PageTitle, TotalItems } from './elements';

export default function Cart() {
  return (
    <main>
      <PageTitle>YOUR BAG</PageTitle>
      <TotalItems>
        TOTAL: (1 item)
        <strong>$180</strong>
      </TotalItems>
      <CartItem />
    </main>
  );
}
