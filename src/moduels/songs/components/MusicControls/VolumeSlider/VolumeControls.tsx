import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VolumeSliderStyled from "./VolumeControlsStyled";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { AppDispatch, RootState } from "../../../../../shared/redux/store";
import { setMute, setVolume } from "../../../../../shared/redux/reducers/musicControlsSlice";
import CustomIconButton from "../../../../../shared/components/CustomIconButton/CustomIconButton";
import { toggleMuteRTDB, volumeLevelRTDB } from "../../../services/musicControlsServices";
interface Props {
  roomId: string;
}
const VolumeControls = ({ roomId }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { volume, toggleMute } = useSelector((state: RootState) => state.musicControls);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { volumeLevel } = volumeLevelRTDB({ roomId, volume: parseFloat(event.target.value) });
    dispatch(setVolume(volumeLevel));
  };

  const handleMute = () => {
    const { toggleMute } = toggleMuteRTDB({ roomId });
    dispatch(setMute(toggleMute));
  };
  const SpeakerIcon = volume < 0.5 ? <VolumeDownIcon /> : <VolumeUpIcon />;

  return (
    <VolumeSliderStyled>
      <CustomIconButton onClick={handleMute}>{toggleMute ? <VolumeOffIcon /> : SpeakerIcon}</CustomIconButton>
      {!toggleMute && (
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
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
