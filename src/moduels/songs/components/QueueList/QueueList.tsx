import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { removeSong } from "../../../../shared/services/firebaseServices/songServices";
import QueueListStyled from "./QueueListStyled";
import { Songs } from "../../../../shared/constants/types/songTypes";
import DurationDisplay from "../DurationDisplay/DurationDisplay";
import { useState, useEffect } from "react";

interface Props {
  handleSelectSong: (index: number) => void;
  roomId: string;
  songsList: Songs[];
  className: string;
}

const QueueList = ({
  songsList,
  handleSelectSong,
  roomId,
  className,
}: Props): JSX.Element => {
  const [totalDuration, setTotalDuration] = useState<string>("");

  useEffect(() => {
    handleSumSongDurations();
  }, [songsList]);

  const removeItem = (index: number) => {
    try {
      const docId = songsList.filter((_, i) => i === index)[0].id;
      removeSong({ roomId, docId });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumSongDurations = () => {
    songsList.map((item) => {
      setTotalDuration(totalDuration + item.duration);
    });
  };

  return (
    <QueueListStyled className={className}>
      <h2>Queue List</h2>
      <ul>
        {songsList.map((item: Songs, index: number) => (
          <li key={index}>
            <IconButton onClick={() => handleSelectSong(index)}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
            {item.songTitle}
            <DurationDisplay durationInSeconds={Number(item.duration)} />
          </li>
        ))}
      </ul>
      <p>total time is</p>
      <DurationDisplay durationInSeconds={Number(totalDuration)} />
    </QueueListStyled>
  );
};

export default QueueList;
