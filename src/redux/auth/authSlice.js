import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './authOperations';

const handelPending = state => {
  state.isLoading = true;
};

const handelReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handelPending,
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: handelReject,
    [login.pending]: handelPending,
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: handelReject,
    [logOut.pending]: handelPending,
    [logOut.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: handelReject,
    [fetchCurrentUser.pending]: handelPending,
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected]: handelReject,
  },
});

export const authReducer = authSlice.reducer;
