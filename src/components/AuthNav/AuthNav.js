import React from 'react';
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
  //   color: 'green',
  // },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        // exact="true"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        registration
      </NavLink>
      <NavLink
        to="/login"
        // exact
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        login
      </NavLink>
    </div>
  );
};

export default AuthNav;
