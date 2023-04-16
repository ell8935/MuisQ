import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicControlsInterface {
  volume: number;
  toggleMute: boolean;
  currentIndex: number;
  togglePlayer: boolean;
  songListLength: number;
}

const initialState: MusicControlsInterface = {
  volume: 1,
  currentIndex: 0,
  toggleMute: false,
  togglePlayer: false,
  songListLength: 0,
};

export const musicControlsSlice = createSlice({
  name: "musicControlsSlice",
  initialState,
  reducers: {
    setSongListLength: (state, action: PayloadAction<number>) => {
      state.songListLength = action.payload;
    },
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

export const { setSongListLength, setTogglePlayer, setSongCurrentIndex, skipSong, previousSong, setVolume, setMute } =
  musicControlsSlice.actions;

export default musicControlsSlice.reducer;
