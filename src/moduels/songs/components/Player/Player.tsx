import ReactPlayer from "react-player";
import PlayerStyled from "./PlayerStyled";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import useSongs from "../../../../shared/hooks/useSongs";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import DurationTimer from "../DurationTimer/DurationTimer";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { AppDispatch } from "../../../../shared/redux/store";
import Loader from "../../../../shared/components/Loader/Loader";
import QueueList from "../../../songs/components/QueueList/QueueList";
import { toggleModal } from "../../../../shared/redux/reducers/modalSlice";
import ShareRoomModal from "../../../main/components/ShareRoom/ShareRoomModal";
import CustomModal from "../../../../shared/components/CustomModal/CustomModal";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";
import { MusicControlsInterface } from "../../../../shared/constants/types/musicControlsTypes";
import { currentSongRTDB, skipSongRTDB, togglePlayerRTDB } from "../../services/musicControlsServices";

interface Props {
  roomId: string;
  className: string;
  playerDetails: MusicControlsInterface;
}

const Player = ({ roomId, className, playerDetails }: Props) => {
  const { songs, isLoading } = useSongs(roomId);
  const dispatch: AppDispatch = useDispatch();
  const playerRef = useRef<ReactPlayer>(null);
  const [durationElapsed, setDurationElapsed] = useState<number>(0);

  const url = songs[playerDetails.currentSong]?.songURL;
  const songTitle = songs[playerDetails.currentSong]?.songTitle;
  const songDuration = songs[playerDetails.currentSong]?.duration;
  const songChannelTitle = songs[playerDetails.currentSong]?.channelTitle;

  document.title = playerDetails.isPlaying === true && url ? `MusiQ-${songTitle}` : "MusiQ";

  const handleTimer = () => {
    if (playerRef.current) {
      setDurationElapsed(Math.floor(playerRef.current.getCurrentTime()));
    }
  };

  const handleSelectSong = (songId: string) => {
    if (songId === playerDetails.currentSong) {
      togglePlayerRTDB({ roomId });
    } else {
      currentSongRTDB({ roomId, songs, songId });
    }
  };

  const handleModalShareRoom = () => {
    dispatch(toggleModal(<ShareRoomModal roomId={roomId} />));
  };

  const handleModalPlaylist = () => {
    dispatch(toggleModal(<PlaylistModal roomId={roomId} />));
  };

  const handleSkipSong = () => {
    skipSongRTDB({ roomId, songs });
  };

  return (
    <PlayerStyled className={className}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CustomModal />
          <span className="roomNameHeader">
            <h4>{roomId} Room</h4>
            <div className="modalSetters">
              <CustomIconButton onClick={handleModalShareRoom}>
                <IosShareIcon />
              </CustomIconButton>

              <CustomIconButton onClick={handleModalPlaylist}>
                <QueueMusicIcon />
              </CustomIconButton>
            </div>
          </span>

          <div className="playerDetailsContainer">
            <div className="player">
              <ReactPlayer
                onProgress={handleTimer}
                onReady={handleTimer}
                url={url}
                playing={playerDetails.isPlaying}
                onEnded={handleSkipSong}
                width="100%"
                height="20vh"
                ref={playerRef}
                volume={playerDetails.volumeLevel}
                muted={playerDetails.toggleMute}
              />
            </div>

            <div className="songDetails">
              <h3>{songTitle}</h3>
              <h5>{songChannelTitle}</h5>
              {songDuration && (
                <DurationTimer
                  durationElapsedInSeconds={durationElapsed}
                  totalDurationInSeconds={Number(songDuration)}
                />
              )}
            </div>
          </div>

          <QueueList
            className="queueList"
            currentPlayingSong={playerDetails.currentSong}
            songsList={songs}
            roomId={roomId}
            handleSelectSong={handleSelectSong}
          />
        </>
      )}
    </PlayerStyled>
  );
};

export default Player;
