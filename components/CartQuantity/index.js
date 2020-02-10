import { CartQuantityContainer, SelectQuantity } from './elements';
import Caret from '../../public/caret.svg';

export default function CartQuantity() {
  return (
    <CartQuantityContainer>
      <SelectQuantity>
        <option>1</option>
        <option>1</option>
      </SelectQuantity>
      <Caret />
    </CartQuantityContainer>
  );
}
