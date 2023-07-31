import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { getIsLogIn } from '../../../redux/auth/authSelectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getIsLogIn, shallowEqual);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
