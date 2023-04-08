import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import PlayerStyled from "./PlayerStyled";
import { useDispatch, useSelector } from "react-redux";
import IosShareIcon from "@mui/icons-material/IosShare";
import useSongs from "../../../../shared/hooks/useSongs";
import DurationTimer from "../DurationTimer/DurationTimer";
import ShareRoom from "../../../main/components/ShareRoom/ShareRoom";
import Loader from "../../../../shared/components/Loader/Loader";
import QueueList from "../../../songs/components/QueueList/QueueList";
import { setModal } from "../../../../shared/redux/reducers/modalSlice";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import CustomModal from "../../../../shared/components/CustomModal/CustomModal";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";
import { setSongCurrentIndex, setTogglePlayer, skipSong } from "../../../../shared/redux/reducers/musicControlsSlice";

interface Props {
  roomId: string;
  className: string;
}

const Player = ({ roomId, className }: Props) => {
  const [songsList, isLoading] = useSongs(roomId);
  const dispatch: AppDispatch = useDispatch();
  const playerRef = useRef<ReactPlayer>(null);
  const [durationElapsed, setDurationElapsed] = useState<number>(0);
  const { togglePlayer, currentIndex, volume, toggleMute } = useSelector((state: RootState) => state.musicControls);

  const url = songsList[currentIndex]?.songURL;
  const songTitle = songsList[currentIndex]?.songTitle;
  const songDuration = songsList[currentIndex]?.duration;
  const songChannelTitle = songsList[currentIndex]?.channelTitle;

  document.title = togglePlayer === true && url ? `MusiQ-${songTitle}` : "MusiQ";

  const handleTimer = () => {
    if (playerRef.current) {
      setDurationElapsed(Math.floor(playerRef.current.getCurrentTime()));
    }
  };

  const handleSelectSong = (index: number) => {
    if (index === currentIndex) {
      return dispatch(setTogglePlayer(!togglePlayer));
    }
    dispatch(setSongCurrentIndex(index ?? 0));
  };

  return (
    <PlayerStyled className={className}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CustomModal>
            <ShareRoom roomId={roomId} />
          </CustomModal>
          <span className="roomNameHeader">
            <h4>{roomId} Room</h4>
            <CustomIconButton onClick={() => dispatch(setModal(true))}>
              <IosShareIcon />
            </CustomIconButton>
          </span>

          <div className="playerDetailsContainer">
            <div className="player">
              <ReactPlayer
                onProgress={handleTimer}
                onReady={handleTimer}
                url={url}
                playing={togglePlayer}
                onEnded={() => dispatch(skipSong())}
                width="20vh"
                height="20vh"
                ref={playerRef}
                volume={volume}
                muted={toggleMute}
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
            currentIndex={currentIndex}
            songsList={songsList}
            roomId={roomId}
            handleSelectSong={handleSelectSong}
          />
        </>
      )}
    </PlayerStyled>
  );
};

export default Player;
