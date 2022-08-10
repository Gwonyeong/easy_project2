import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/sign/up", payload);

    alert(response.data.msg);
    return response.data.bool;
  }
);

export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/sign/dup", payload);
    if (!response.data.bool) alert(response.data.msg);
    return response.data.bool;
  }
);

// export const __checkNickname = createAsyncThunk(
//   "signup/CHECKNICK_LOG",
//   async (payload, thunkAPI) => {
//     const response = await api.get(`/user/nickname/${payload}`);
//     if (!response.data.result) alert("동일한 닉네임이 존재합니다");
//     return response.data.result;
//   }
// );

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    checkName: false,
    checkNick: false,
    checkMsg: "",
  },
  reducers: {
    changeCheckName: (state, payload) => {
      state.checkName = false;
    },
    changeCheckNick: (state) => {
      state.checkNick = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__signup.fulfilled, (state, action) => {
        state.success = action.payload;
      })

      .addCase(__checkUsername.fulfilled, (state, action) => {
        state.checkName = action.payload;
      })
      .addCase(__checkUsername.rejected, (state, action) => {
        state.checkName = true;
      });

    // .addCase(__checkNickname.fulfilled, (state, action) => {
    //   state.checkNick = action.payload;
    // })
    // .addCase(__checkNickname.rejected, (state, action) => {
    //   state.checkNick = true;
    // });
  },
});

export const { changeCheckName } = signupSlice.actions;
export default signupSlice.reducer;
