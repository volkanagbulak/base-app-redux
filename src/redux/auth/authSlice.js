import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isError = false;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.userRegister = action.payload.id;
      state.isError = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    loggingOut: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
    },
    registerFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, loggingOut, registerFailure, registerSuccess } = authSlice.actions;

export default authSlice.reducer;
