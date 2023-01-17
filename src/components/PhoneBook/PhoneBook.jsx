// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './phoneBook.module.css';

import { addContact, deleteContact } from '../../redux/contacts/contactsSlice';
import { setFilter } from 'redux/filter/filtersSlice';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const addNewContact = data => {
    const isDuplicated = contacts
      ? contacts.find(contact => contact.name === data.name)
      : false;
    if (isDuplicated) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };
  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  const filterText = filter.toLowerCase();
  const filterContacts = contacts.filter(({ name }) => {
    const result = name.toLowerCase().includes(filterText);
    return result;
  });

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList contacts={filterContacts} removeContact={removeContact} />
    </div>
  );
};

export default PhoneBook;
