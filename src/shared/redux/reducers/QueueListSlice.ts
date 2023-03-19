import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface queueItem {
  title: string;
  url: string;
}

const initialState: queueItem[] = [];

export const queueListSlice = createSlice({
  name: "queueListSlice",
  initialState,
  reducers: {
    setQueueListData: (state, action: PayloadAction<queueItem[]>) => {
      return action.payload;
    },
  },
});

export const { setQueueListData } = queueListSlice.actions;

export default queueListSlice.reducer;
