import { configureStore } from "@reduxjs/toolkit";

import authContext from "../modules/authContext";

const store = configureStore({
  reducer: { authContext: authContext.reducer },
});

export default store;
