import screenfull from "screenfull";
import { useSelector } from "react-redux";
import MusicControlStyled from "./MusicControlsStyled";
import { RootState } from "../../../../shared/redux/store";
import VolumeControls from "./VolumeSlider/VolumeControls";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import SkipPreviousOutlined from "@mui/icons-material/SkipPreviousOutlined";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";
import { MusicControlsInterface } from "../../../../shared/constants/types/musicControlsTypes";
import { previousSongRTDB, skipSongRTDB, togglePlayerRTDB } from "../../services/musicControlsServices";

interface Props {
  roomId: string;
  playerDetails?: MusicControlsInterface;
}

const MusicControls = ({ roomId, playerDetails }: Props) => {
  const { songs } = useSelector((state: RootState) => state.songs);

  const togglePlayerPausePlay = () => {
    togglePlayerRTDB({ roomId });
  };

  const handleFullScreen = () => {
    const playerElement = document.getElementsByTagName("iframe")[0];
    if (screenfull.isEnabled && playerElement !== null) {
      screenfull.request(playerElement);
    }
  };

  const handleSkipSong = () => {
    skipSongRTDB({ roomId, songs });
  };

  const handlePreviousSong = () => {
    previousSongRTDB({ roomId, songs });
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
          {playerDetails?.isPlaying ? (
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
