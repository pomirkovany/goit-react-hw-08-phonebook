import PropTypes from 'prop-types';

import styles from './contactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {' '}
      {name}: {number}
      <button className={styles.btn} onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
