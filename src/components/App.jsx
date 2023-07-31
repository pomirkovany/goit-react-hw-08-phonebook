import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchCurrentUser } from 'redux/auth/authOperations';

import NavigationRoutes from './NavigationRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <NavigationRoutes />
    </div>
  );
};
