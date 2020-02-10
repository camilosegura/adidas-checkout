import PropTypes from 'prop-types';
import {
  CartItemContainer,
  CartItemDescription,
  CartItemSizePrice,
  CartItemStock,
  CartItemTitle,
  LinkImage,
} from './elements';

export default function CartItem({ children, actionsBar }) {
  return (
    <CartItemContainer>
      <LinkImage>
        <img src="/cart-item.webp" alt="" />
      </LinkImage>
      <CartItemDescription className="offset-lg-1">
        <CartItemTitle>
          <a href="/">
            ULTRABOOST DNA
          </a>
          <span>$180.00</span>
        </CartItemTitle>
        <span>CORE BLACK / CORE BLACK / SCARLET</span>
        <CartItemSizePrice>SIZE: 6 (US Men)</CartItemSizePrice>
        <CartItemStock>LOW IN STOCK</CartItemStock>
        {children}
      </CartItemDescription>
      {actionsBar}
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  children: PropTypes.element.isRequired,
  actionsBar: PropTypes.element.isRequired,
};
