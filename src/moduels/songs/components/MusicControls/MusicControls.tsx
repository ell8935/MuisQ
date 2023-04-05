import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlined from "@mui/icons-material/SkipPreviousOutlined";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import {
  previousSong,
  setTogglePlayer,
  skipSong,
} from "../../../../shared/redux/reducers/musicControlsSlice";
import { IconButton } from "@mui/material";
import VolumeControls from "./VolumeSlider/VolumeControls";
import MusicControlStyled from "./MusicControlsStyled";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import screenfull from "screenfull";

const MusicControls = () => {
  const { togglePlayer } = useSelector(
    (state: RootState) => state.musicControls
  );
  const dispatch: AppDispatch = useDispatch();

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
      <div className="div1">
        <VolumeControls />
      </div>
      <div className="div2">
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
      <div className="div3">
        <IconButton onClick={handleFullScreen}>
          <FullscreenIcon sx={{ fontSize: 35 }}></FullscreenIcon>
        </IconButton>
      </div>
    </MusicControlStyled>
  );
};

export default MusicControls;
