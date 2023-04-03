import { IconButton } from "@mui/material";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../../shared/components/CustomModal/CustomModal";
import { useSongs } from "../../../../shared/hooks/useSongs";
import {
  setSongCurrentIndex,
  setTogglePlayer,
  skipSong,
} from "../../../../shared/redux/reducers/musicControlsSlice";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import ShareRoom from "../../../main/components/ShareRoom/ShareRoom";
import QueueList from "../../../songs/components/QueueList/QueueList";
import PlayerStyled from "./PlayerStyled";
import IosShareIcon from "@mui/icons-material/IosShare";
import { setModal } from "../../../../shared/redux/reducers/modalSlice";
import DurationTimer from "../DurationTimer/DurationTimer";
import { useRef, useState } from "react";

interface Props {
  roomId: string;
  className: string;
}

const Player = ({ roomId, className }: Props) => {
  const songsList = useSongs(roomId);
  const dispatch: AppDispatch = useDispatch();
  const { togglePlayer, currentIndex } = useSelector(
    (state: RootState) => state.musicControls
  );
  const [durationElapsed, setDurationElapsed] = useState<number>(0);

  const url = songsList[currentIndex]?.songURL;
  const songTitle = songsList[currentIndex]?.songTitle;
  const songDuration = songsList[currentIndex]?.duration;
  const songChannelTitle = songsList[currentIndex]?.channelTitle;

  const playerRef = useRef<ReactPlayer>(null);

  document.title =
    togglePlayer === true && url ? `MusiQ-${songTitle}` : "MusiQ";

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
      <span className="roomNameHeader">
        {roomId}'s room
        <CustomModal>
          <ShareRoom roomId={roomId} />
        </CustomModal>
        <IconButton onClick={() => dispatch(setModal(true))}>
          <IosShareIcon />
        </IconButton>
      </span>

      <div className="playerDetailsContainer">
        <div className="player">
          <ReactPlayer
            onProgress={handleTimer}
            onReady={handleTimer}
            url={url}
            playing={togglePlayer}
            onEnded={() => dispatch(skipSong())}
            width="25vh"
            height="15vh"
            ref={playerRef}
          />
        </div>

        <div className="songDetails">
          <h3>{songTitle}</h3>
          <h5>{songChannelTitle}</h5>
          <DurationTimer
            durationElapsedInSeconds={durationElapsed}
            totalDurationInSeconds={Number(songDuration)}
          />
        </div>
      </div>

      <QueueList
        className="queueList"
        songsList={songsList}
        roomId={roomId}
        handleSelectSong={handleSelectSong}
      />
    </PlayerStyled>
  );
};

export default Player;
