import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import VolumeSliderStyled from "./VolumeControlsStyled";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../shared/redux/store";
import {
  setMute,
  setVolume,
} from "../../../../../shared/redux/reducers/musicControlsSlice";

const VolumeControls = () => {
  const dispatch: AppDispatch = useDispatch();
  const { volume, toggleMute } = useSelector(
    (state: RootState) => state.musicControls
  );

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(parseFloat(event.target.value)));
  };

  const handleMute = () => {
    dispatch(setMute());
  };
  const SpeakerIcon = volume < 0.5 ? <VolumeDownIcon /> : <VolumeUpIcon />;

  return (
    <VolumeSliderStyled>
      <IconButton onClick={handleMute} className="speakerIcon">
        {toggleMute ? <VolumeOffIcon /> : SpeakerIcon}
      </IconButton>
      {toggleMute ? (
        ""
      ) : (
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
          className="verticalSlider"
        />
      )}
    </VolumeSliderStyled>
  );
};

export default VolumeControls;

//mobile implementation not sure if needed
// useEffect(() => {
//   const handleMobileVolumeChange = () => {
//     const mobileVolume = parseFloat(
//       ((window as any).mediaSession?.volume?.level ?? 0.5).toFixed(1)
//     );
//     setVolume(mobileVolume);
//   };
//   window.addEventListener("mediaSessionAction", handleMobileVolumeChange);
//   return () => {
//     window.removeEventListener(
//       "mediaSessionAction",
//       handleMobileVolumeChange
//     );
//   };
// }, []);
