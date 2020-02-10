import ButtonPay from 'components/ButtonPay';
import Or from './elements';

export default function ButtonsPay() {
  return (
    <>
      <ButtonPay />
      <Or>OR</Or>
      <ButtonPay payPal />
    </>
  );
}
