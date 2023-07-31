import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import NavbarMenu from 'components/NavbarMenu';
import NavbarUser from 'components/NavbarUser';
import Loader from 'shared/components/Loader';

import { getIsLogIn } from '../../redux/auth/authSelectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLogIn);
  return (
    <>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn && <NavbarMenu />}
        {isLoggedIn ? <NavbarUser /> : <AuthNav />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppBar;
