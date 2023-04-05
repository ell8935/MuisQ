import screenfull from "screenfull";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MusicControlStyled from "./MusicControlsStyled";
import VolumeControls from "./VolumeSlider/VolumeControls";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import SkipPreviousOutlined from "@mui/icons-material/SkipPreviousOutlined";
import { previousSong, setTogglePlayer, skipSong } from "../../../../shared/redux/reducers/musicControlsSlice";

const MusicControls = () => {
  const dispatch: AppDispatch = useDispatch();
  const { togglePlayer } = useSelector((state: RootState) => state.musicControls);

  const togglePlayerPausePlay = () => {
    dispatch(setTogglePlayer(!togglePlayer));
  };

  const handleFullScreen = () => {
    const playerElement = document.getElementsByTagName("iframe")[0];
    if (screenfull.isEnabled && playerElement !== null) {
      screenfull.request(playerElement);
    }
  };
  return (
    <MusicControlStyled>
      <div className="volume">
        <VolumeControls />
      </div>
      <div className="baseControls">
        <IconButton onClick={() => dispatch(previousSong())}>
          <SkipPreviousOutlined sx={{ fontSize: 35 }}></SkipPreviousOutlined>
        </IconButton>

        <IconButton onClick={togglePlayerPausePlay}>
          {togglePlayer ? (
            <PauseOutlined sx={{ fontSize: 35 }}></PauseOutlined>
          ) : (
            <PlayArrowOutlined sx={{ fontSize: 35 }}></PlayArrowOutlined>
          )}
        </IconButton>

        <IconButton onClick={() => dispatch(skipSong())}>
          <SkipNextOutlined sx={{ fontSize: 35 }}></SkipNextOutlined>
        </IconButton>
      </div>
      <div className="fullScreen">
        <IconButton onClick={handleFullScreen}>
          <FullscreenIcon sx={{ fontSize: 35 }}></FullscreenIcon>
        </IconButton>
      </div>
    </MusicControlStyled>
  );
};

export default MusicControls;
