import { NavLink } from 'react-router-dom';

const NavLinks = ({ onClose }) => {
  const navItems = [
    { key: '', label: 'Home' },
    { key: 'biography', label: 'Biography' },
    { key: 'videos', label: 'Videos' },
    { key: 'articles', label: 'Articles' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'quotes', label: 'Insights' },
    { key: 'discography', label: 'Discography' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <li className="nav-item" key={item.key}>
          <NavLink
            to={`/${item.key}`}
            activeClassName="active"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              onClose();
            }}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
