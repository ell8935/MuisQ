import { UserInfo } from "firebase/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Partial<UserInfo> = {};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (_state, action: PayloadAction<UserInfo>) => {
      return action.payload;
    },

    clearAuth: () => {
      return initialState;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
