import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalData: React.ReactNode;
}

const initialState: ModalState = {
  isOpen: false,
  modalData: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.isOpen = !state.isOpen;
      state.modalData = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
