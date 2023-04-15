import screenfull from "screenfull";
import { useDispatch, useSelector } from "react-redux";
import MusicControlStyled from "./MusicControlsStyled";
import VolumeControls from "./VolumeSlider/VolumeControls";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import SkipPreviousOutlined from "@mui/icons-material/SkipPreviousOutlined";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";
import { previousSong, setTogglePlayer, skipSong } from "../../../../shared/redux/reducers/musicControlsSlice";

const MusicControls = () => {
  const dispatch: AppDispatch = useDispatch();
  const { togglePlayer, songListLength, currentIndex } = useSelector((state: RootState) => state.musicControls);

  const togglePlayerPausePlay = () => {
    dispatch(setTogglePlayer(!togglePlayer));
  };

  const handleFullScreen = () => {
    const playerElement = document.getElementsByTagName("iframe")[0];
    if (screenfull.isEnabled && playerElement !== null) {
      screenfull.request(playerElement);
    }
  };

  const handleSkipSong = () => {
    if (currentIndex + 1 < songListLength) dispatch(skipSong());
  };

  const handlePreviousSong = () => {
    if (currentIndex > 0) dispatch(previousSong());
  };
  return (
    <MusicControlStyled>
      <div className="volume">
        <VolumeControls />
      </div>
      <div className="baseControls">
        <CustomIconButton onClick={handlePreviousSong}>
          <SkipPreviousOutlined sx={{ fontSize: 35 }}></SkipPreviousOutlined>
        </CustomIconButton>

        <CustomIconButton onClick={togglePlayerPausePlay}>
          {togglePlayer ? (
            <PauseOutlined sx={{ fontSize: 35 }}></PauseOutlined>
          ) : (
            <PlayArrowOutlined sx={{ fontSize: 35 }}></PlayArrowOutlined>
          )}
        </CustomIconButton>

        <CustomIconButton onClick={handleSkipSong}>
          <SkipNextOutlined sx={{ fontSize: 35 }}></SkipNextOutlined>
        </CustomIconButton>
      </div>
      <div className="fullScreen">
        <CustomIconButton onClick={handleFullScreen}>
          <FullscreenIcon sx={{ fontSize: 35 }}></FullscreenIcon>
        </CustomIconButton>
      </div>
    </MusicControlStyled>
  );
};

export default MusicControls;
