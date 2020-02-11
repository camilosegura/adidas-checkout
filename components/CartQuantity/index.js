import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CartQuantityContainer, SelectQuantity } from './elements';
import Caret from '../../public/caret.svg';
import { changeQuantity } from '../../redux/actions';

const options = [1, 2, 3];

export default function CartQuantity({ id, quantity }) {
  const dispatch = useDispatch();
  const onChange = useCallback(({ target }) => dispatch(changeQuantity({
    id, qty: +target.value,
  })));

  return (
    <CartQuantityContainer>
      <SelectQuantity value={quantity} onChange={onChange}>
        {options.map((qty) => (
          <option key={qty} value={qty}>{qty}</option>
        ))}
      </SelectQuantity>
      <Caret />
    </CartQuantityContainer>
  );
}

CartQuantity.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
