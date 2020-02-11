import PropTypes from 'prop-types';
import {
  CartItemContainer,
  CartItemDescription,
  CartItemSizePrice,
  CartItemStock,
  CartItemTitle,
  LinkImage,
} from './elements';

export default function CartItem({
  children, actionsBar, name, color, price, gender, size, availability,
}) {
  return (
    <CartItemContainer>
      <LinkImage>
        <img src="/cart-item.webp" alt="" />
      </LinkImage>
      <CartItemDescription className="offset-lg-1">
        <CartItemTitle>
          <a href="/">
            {name}
          </a>
          <span>{`$${price}.00`}</span>
        </CartItemTitle>
        <span>{color}</span>
        <CartItemSizePrice>
          SIZE:
          {` ${size} `}
          (
          US
          {gender === 'M' ? ' Men' : ' Women'}
          )
        </CartItemSizePrice>
        <CartItemStock>{availability}</CartItemStock>
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
