import { useDispatch, useSelector } from 'react-redux';
import ButtonsPay from 'components/ButtonsPay';
import CartItem from 'components/CartItem';
import CartItemActionsBar from 'components/CartItemActionsBar';
import CartQuantity from 'components/CartQuantity';
import OrderSummary from 'components/OrderSummary';
import PromoCode from 'components/PromoCode';
import { removeProduct } from '../../redux/actions';
import {
  ButtonsPayContainer, PageHeader, PageTitle, TotalItems,
} from './elements';

export default function Cart() {
  const products = useSelector((state) => state.products);
  const totalItems = useSelector((state) => state.totalItems);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="row">
      <PageHeader className="col-lg-24">
        <PageTitle>YOUR BAG</PageTitle>
        <TotalItems>
          TOTAL: (
          {totalItems}
          {totalItems > 1 ? ' items' : ' item'}
          )
          <strong>{`$${totalPrice}`}</strong>
        </TotalItems>
      </PageHeader>
      <main className="col-lg-16">
        {Object.values(products).map(({
          id, name, color, price, gender, size, availability,
        }) => (
          <CartItem
            key={id}
            name={name}
            color={color}
            price={price}
            gender={gender}
            size={size}
            availability={availability}
            actionsBar={<CartItemActionsBar onRemove={() => dispatch(removeProduct(id))} />}
          >
            <CartQuantity />
          </CartItem>
        ))}

        <ButtonsPayContainer>
          <ButtonsPay />
        </ButtonsPayContainer>
      </main>
      <aside className="col-lg-8">
        <ButtonsPay />
        <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
        <PromoCode />
      </aside>
    </div>
  );
}
