import LogoRebook from '../../public/reebok-white.svg';
import LogoProfile from '../../public/profile.svg';
import LogoAdidas from '../../public/adidas-white.svg';
import {
  HeaderBottom,
  HeaderTop,
  HeaderBottomContainer,
  HeaderTopContainer,
  LinkAdidas,
  LinkLogin,
  LinkReebok,
  ListBase,
  ListTop,
  NavBase,
} from './elements';

export default function Header() {
  const linksUser = [
    {
      link: '#',
      label: 'HELP',
    },
    {
      link: '#',
      label: 'ORDER TRACKER AND RETURNS',
    },
    {
      link: '#',
      label: 'JOIN CREATORS CLUB',
    },
    {
      link: '#',
      label: 'CREATORS CLUB',
    },
  ];

  const linksNav = [
    {
      link: '#',
      label: 'MEN',
    },
    {
      link: '#',
      label: 'WOMEN',
    },
    {
      link: '#',
      label: 'KIDS',
    },
    {
      link: '#',
      label: 'SPORTS',
    },
    {
      link: '#',
      label: 'BRANDS',
    },
    {
      link: '#',
      label: 'RELEASE DATES',
    },
  ];

  return (
    <header>
      <HeaderTop>
        <HeaderTopContainer>
          <LinkReebok href="/">
            ALSO VISIT
            <LogoRebook />
          </LinkReebok>
          <NavBase>
            <ListTop>
              {linksUser.map(({ link, label, className = '' }) => (
                <li className={className} key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ListTop>
          </NavBase>
          <LinkLogin href="/">
            LOG IN
            <LogoProfile />
          </LinkLogin>
        </HeaderTopContainer>
      </HeaderTop>
      <HeaderBottom>
        <HeaderBottomContainer>
          <LinkAdidas href="/">
            <LogoAdidas />
          </LinkAdidas>
          <NavBase>
            <ListBase>
              {linksNav.map(({ link, label, className = '' }) => (
                <li className={className} key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ListBase>
          </NavBase>
        </HeaderBottomContainer>
      </HeaderBottom>
    </header>
  );
}
