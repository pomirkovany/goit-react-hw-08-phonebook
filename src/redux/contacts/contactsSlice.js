import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const handelPending = state => {
  state.isLoading = true;
};

const handelReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    items: [],
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending]: handelPending,
    [fetchContacts.rejected]: handelReject,

    [addContact.pending]: handelPending,
    [addContact.rejected]: handelReject,
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },

    [deleteContact.pending]: handelPending,
    [deleteContact.rejected]: handelReject,
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
