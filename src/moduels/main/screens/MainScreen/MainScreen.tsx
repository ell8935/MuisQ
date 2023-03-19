import ReactPlayer from "react-player";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../shared/redux/store";
import QueueList from "../../../songs/components/QueueList/QueueList";

const MainScreen = () => {
  const queueList = useSelector((state: RootState) => state.queueList);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const url =
    queueList[currentVideoIndex]?.url ||
    "https://www.youtube.com/watch?v=NiPCZ6mW_T8";

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

  return (
    <>
      <ReactPlayer url={url} playing={isPlaying} onEnded={handleSkipSong} />
      <QueueList handleSelectSong={handleSelectSong} />
      <button onClick={togglePlayer}>play/pause</button>
      <button onClick={handleSkipSong}>Skip</button>
    </>
  );
};

export default MainScreen;
