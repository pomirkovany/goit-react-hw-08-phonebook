// import { store } from 'redux/store';

export const getContacts = store => store.contacts.items;
export const getIsLoading = store => store.contacts.isLoading;
export const getError = store => store.contacts.error;
