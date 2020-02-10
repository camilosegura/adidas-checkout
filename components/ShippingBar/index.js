import { LinkShipping, ShippingBarContainer } from './elements';
import LogoDelivery from '../../public/delivery.svg';
import LogoAdidas from '../../public/adidas-white.svg';

export default function ShippingBar() {
  const links = [
    {
      link: '#',
      label: 'UP TO 65% OFF - USE DODE: CYBER',
    },
    {
      link: '#',
      label: 'FREE SHIPPING OVER $49 AND FREE RETURNS',
      icon: LogoDelivery,
    },
    {
      link: '#',
      label: 'JOIN THE ADIDAS CREATORS CLUB',
      icon: LogoAdidas,
    },
  ];

  return (
    <ShippingBarContainer>

      {links.map(({ link, label, icon: Icon }) => (
        <LinkShipping href={link} key={label}>
          {Icon && <Icon />}

          {label}
        </LinkShipping>
      ))}

    </ShippingBarContainer>
  );
}
