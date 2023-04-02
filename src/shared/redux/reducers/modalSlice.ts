import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface modalInterface {
//   isOpen: boolean;
// }

// const initialState: modalInterface = {
//   isOpen: false,
// };
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
