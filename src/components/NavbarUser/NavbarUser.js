import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const NavbarUser = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div style={styles.container}>
      <span style={styles.name}> welcome: {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        exit
      </button>
    </div>
  );
};

export default NavbarUser;
