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
  children, actionsBar, name, color, price, gender, size, availability, image,
}) {
  return (
    <CartItemContainer>
      <LinkImage>
        <img src={image} alt="" />
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
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
