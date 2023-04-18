import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicControlsInterface {
  volume: number;
  toggleMute: boolean;
}

const initialState: MusicControlsInterface = {
  volume: 1,
  toggleMute: false,
};

export const musicControlsSlice = createSlice({
  name: "musicControlsSlice",
  initialState,
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },

    setMute: (state, action: PayloadAction<boolean>) => {
      state.toggleMute = action.payload;
    },
  },
});

export const { setVolume, setMute } = musicControlsSlice.actions;

export default musicControlsSlice.reducer;
