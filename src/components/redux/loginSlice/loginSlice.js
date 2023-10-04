/** @format */

import { createSlice } from "@reduxjs/toolkit";
import filesSlice from "../filesSlice/filesSlice";
import { Registration, UserLogin, changeUserProfile } from "../extraReducer";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const initialState = {
  loading: null,
  user: null,
  errorData: "",
  error: null,
  userL:null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Registration.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Registration.fulfilled, (state, actio) => {
        state.loading = false;
        state.user = "logged";
      })
      .addCase(Registration.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(UserLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = "logged";
        console.log(action.payload);
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.errorData = action.error.message;
        console.log(action.error.message);
      });
    builder
      .addCase(changeUserProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(changeUserProfile.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.userL = "done"
      localStorage.setItem("UserLocal",JSON.stringify(payload))
      })
      .addCase(changeUserProfile.rejected, (state, action) => {
        state.errorData = action.error.message;
        console.log(action.error.message);
      });
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
