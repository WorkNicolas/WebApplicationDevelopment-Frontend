/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
