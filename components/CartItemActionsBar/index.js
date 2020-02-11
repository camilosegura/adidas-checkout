import PropTypes from 'prop-types';
import ButtonAction from './elements';
import LogoDelete from '../../public/delete.svg';
import LogoWishList from '../../public/wishlist.svg';


export default function CartItemActions({ onRemove }) {
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
  onRemove: PropTypes.func.isRequired,
};
