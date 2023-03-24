import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useSongs } from "../../../../shared/hooks/useSongs";
import QueueList from "../../../songs/components/QueueList/QueueList";
import LoginButton from "../../../auth/components/LoginButton/LoginButton";
import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
interface Props {
  roomId: string;
}

const Player = ({ roomId }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const songsList = useSongs(roomId);

  const url = songsList[currentVideoIndex]?.songURL;
  const tabTitle = songsList[currentVideoIndex]?.songTitle;
  document.title = isPlaying ? `MusiQ-${tabTitle}` : "MusiQ";

  const togglePlayer = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSelectSong = (index: number) => {
    if (index === currentVideoIndex) {
      return togglePlayer();
    }

    setCurrentVideoIndex(index ?? 0);
  };

  const handleSkipSong = () => {
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };
  const handleOnPause = () => {
    setIsPlaying(false);
  };
  const handleOnPlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <ReactPlayer
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        url={url}
        playing={isPlaying}
        onEnded={handleSkipSong}
      />
      <QueueList
        songsList={songsList}
        roomId={roomId}
        handleSelectSong={handleSelectSong}
      />
      <button onClick={togglePlayer}>play/pause</button>
      <button onClick={handleSkipSong}>Skip</button>
    </>
  );
};

export default Player;
