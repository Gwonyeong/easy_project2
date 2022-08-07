import { createSlice } from "@reduxjs/toolkit";

const authContext = createSlice({
  name: "authContext",
  initialState: {
    token: "",
    isLoggedIn: false,
  },

  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },

    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const authActions = authContext.actions;

export default authContext;
