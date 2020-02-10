import ButtonAction from './elements';
import LogoDelete from '../../public/delete.svg';
import LogoWishList from '../../public/wishlist.svg';


export default function CartItemActions() {
  return (
    <div>
      <ButtonAction>
        <LogoDelete />
      </ButtonAction>
      <ButtonAction>
        <LogoWishList />
      </ButtonAction>
    </div>
  );
}
