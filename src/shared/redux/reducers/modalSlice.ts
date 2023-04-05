import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModal: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
