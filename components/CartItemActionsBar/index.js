import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAction from './elements';
import LogoDelete from '../../public/delete.svg';
import LogoWishList from '../../public/wishlist.svg';
import { removeProduct } from '../../redux/actions';

export default function CartItemActions({ id }) {
  const dispatch = useDispatch();
  const onRemove = useCallback(() => dispatch(removeProduct(id)), []);

  return (
    <div>
      <ButtonAction onClick={onRemove}>
        <LogoDelete />
      </ButtonAction>
      <ButtonAction>
        <LogoWishList />
      </ButtonAction>
    </div>
  );
}

CartItemActions.propTypes = {
  id: PropTypes.string.isRequired,
};
