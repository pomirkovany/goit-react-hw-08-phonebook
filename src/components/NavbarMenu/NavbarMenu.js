import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  // activeLink: {
  //   color: '#E84A5F',
  // },
};

const NavbarMenu = () => {
  return (
    <NavLink
      to="/contacts"
      // exact
      style={styles.link}
      // activeStyle={styles.activeLink}
    >
      contacts
    </NavLink>
  );
};

export default NavbarMenu;
