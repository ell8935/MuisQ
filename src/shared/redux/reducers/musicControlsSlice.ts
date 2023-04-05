import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MusicControlsInterface {
  togglePlayer: boolean;
  currentIndex: number;
  volume: number;
  toggleMute: boolean;
}

const initialState: MusicControlsInterface = {
  togglePlayer: false,
  currentIndex: 0,
  volume: 1,
  toggleMute: false,
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
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setMute: (state) => {
      state.toggleMute = !state.toggleMute;
    },
  },
});

export const {
  setTogglePlayer,
  setSongCurrentIndex,
  skipSong,
  previousSong,
  setVolume,
  setMute,
} = musicControlsSlice.actions;

export default musicControlsSlice.reducer;
