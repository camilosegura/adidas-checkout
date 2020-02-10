import { PromoCodeForm, PromoCodeInput } from './elements';
import LogoPlus from '../../public/plus.svg';

export default function PromoCode() {
  return (
    <PromoCodeForm>
      <PromoCodeInput placeholder="Enter your promo code" />
      <LogoPlus />
    </PromoCodeForm>
  );
}
