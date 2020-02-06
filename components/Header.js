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
    {
      link: '#',
      label: 'LOG IN',
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
      <nav className="links-user">
        <ul>
          {linksUser.map(({ link, label, className = '' }) => (
            <li className={className} key={link}>
              <a href={link}>{ label }</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {linksNav.map(({ link, label, className = '' }) => (
            <li className={className} key={link}>
              <a href={link}>{ label }</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
