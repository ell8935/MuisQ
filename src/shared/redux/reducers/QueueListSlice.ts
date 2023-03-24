import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { queueItem } from "../../constants/types";

const initialState: queueItem[] = [];

export const queueListSlice = createSlice({
  name: "queueListSlice",
  initialState,
  reducers: {
    setQueueListData: (_state, action: PayloadAction<queueItem[]>) => {
      return action.payload;
    },
  },
});

export const { setQueueListData } = queueListSlice.actions;

export default queueListSlice.reducer;
