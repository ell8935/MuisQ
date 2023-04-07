/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import QueueListStyled from "./QueueListStyled";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DurationDisplay from "../DurationDisplay/DurationDisplay";
import { Songs } from "../../../../shared/constants/types/songTypes";
import { removeSong } from "../../../../shared/services/firebaseServices/songServices";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";

interface Props {
  roomId: string;
  className: string;
  songsList: Songs[];
  currentIndex: number;
  handleSelectSong: (index: number) => void;
}

const QueueList = ({ roomId, className, songsList, currentIndex, handleSelectSong }: Props): JSX.Element => {
  const [totalDuration, setTotalDuration] = useState<number>(0);

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
    const durations = songsList.map((item) => Number(item.duration));
    const totalDurationInSeconds = durations.reduce((acc, curr) => acc + curr, 0);
    setTotalDuration(totalDurationInSeconds);
  };

  return (
    <QueueListStyled className={className} currentIndex={currentIndex}>
      <ul>
        {songsList.map((item: Songs, index: number) => (
          <li key={index} className={currentIndex === index ? "highlighted" : ""}>
            <MusicNoteIcon color="action" />
            <div className="songTitle">{item.songTitle}</div>
            <div className="queueListButton">
              <CustomIconButton onClick={() => handleSelectSong(index)}>
                <PlayArrowIcon />
              </CustomIconButton>
              <CustomIconButton color="warning" onClick={() => removeItem(index)}>
                <DeleteIcon />
              </CustomIconButton>
            </div>
            <div className="durationTime">
              <DurationDisplay durationInSeconds={Number(item.duration)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="totalDuration">
        <DurationDisplay isTotal durationInSeconds={Number(totalDuration)} />
      </div>
    </QueueListStyled>
  );
};

export default QueueList;
