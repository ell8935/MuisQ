import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useSongs } from "../../../../shared/hooks/useSongs";
import {
  setSongCurrentIndex,
  setTogglePlayer,
  skipSong,
} from "../../../../shared/redux/reducers/musicControlsSlice";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import QueueList from "../../../songs/components/QueueList/QueueList";
import PlayerStyled from "./PlayerStyled";

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

  const url = songsList[currentIndex]?.songURL;
  const songTitle = songsList[currentIndex]?.songTitle;

  document.title =
    togglePlayer === true && url ? `MusiQ-${songTitle}` : "MusiQ";

  const handleSelectSong = (index: number) => {
    if (index === currentIndex) {
      return dispatch(setTogglePlayer(!togglePlayer));
    }
    dispatch(setSongCurrentIndex(index ?? 0));
  };

  return (
    <PlayerStyled className={className}>
      <span>{roomId}'s room</span>

      <div className="playerDetailsContainer">
        <ReactPlayer
          url={url}
          playing={togglePlayer}
          onEnded={() => dispatch(skipSong())}
          width="45%"
          height="100%"
        />

        <div className="songDetails">
          <h2>{songTitle}</h2>
          <h5>channel name</h5>
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
