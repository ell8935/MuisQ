import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const roomsSlice = createSlice({
  name: "roomsSlice",
  initialState,
  reducers: {
    setRooms: (_state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { setRooms } = roomsSlice.actions;

export default roomsSlice.reducer;
