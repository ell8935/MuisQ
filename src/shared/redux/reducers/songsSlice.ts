import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Songs } from "../../constants/types/songTypes";

interface SongsSliceInterface {
  songs: Songs;
  isLoading: boolean;
}

const initialState: SongsSliceInterface = {
  songs: {},
  isLoading: false,
};

export const songsSlice = createSlice({
  name: "songsSlice",
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<Songs>) => {
      state.songs = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSongs, setLoading } = songsSlice.actions;

export default songsSlice.reducer;
