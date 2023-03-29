import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MusicControlsInterface {
  togglePlayer: boolean;
  currentIndex: number;
}

const initialState: MusicControlsInterface = {
  togglePlayer: false,
  currentIndex: 0,
};

export const musicControlsSlice = createSlice({
  name: "musicControlsSlice",
  initialState,
  reducers: {
    setTogglePlayer: (state, action: PayloadAction<boolean>) => {
      state.togglePlayer = action.payload;
    },
    setSongCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    skipSong: (state) => {
      state.currentIndex += 1;
    },
    previousSong: (state) => {
      state.currentIndex -= 1;
    },
  },
});

export const { setTogglePlayer, setSongCurrentIndex, skipSong, previousSong } =
  musicControlsSlice.actions;

export default musicControlsSlice.reducer;
