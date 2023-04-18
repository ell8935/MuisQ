/* eslint-disable react-hooks/exhaustive-deps */
import QueueListStyled from "./QueueListStyled";
import { useState, useEffect, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeSong } from "../../services/songServices";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { MusiQWithName } from "../../../../shared/assets/images";
import DurationDisplay from "../DurationDisplay/DurationDisplay";
import { Songs } from "../../../../shared/constants/types/songTypes";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";

interface Props {
  roomId: string;
  className: string;
  songsList: Songs;
  currentPlayingSong: string;
  handleSelectSong: (item: string) => void;
}

const QueueList = ({ roomId, className, songsList, currentPlayingSong, handleSelectSong }: Props): JSX.Element => {
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const currentSongRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    handleSumSongDurations();
  }, [songsList]);

  useEffect(() => {
    if (currentSongRef.current) {
      currentSongRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPlayingSong]);

  const removeItem = (item: string) => {
    try {
      removeSong({ roomId, docId: item });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumSongDurations = () => {
    const durations = Object.values(songsList).map((item) => Number(item.duration));
    const totalDurationInSeconds = durations.reduce((acc, curr) => acc + curr, 0);
    setTotalDuration(totalDurationInSeconds);
  };

  return (
    <QueueListStyled className={className}>
      <ul>
        <div className="queueListHeader">
          <div className="logo">
            <img src={MusiQWithName} alt="logo" />
          </div>
          <DurationDisplay isTotal durationInSeconds={Number(totalDuration)} />
        </div>

        {Object.entries(songsList).map(([songKey, songValues]) => (
          <li
            key={songKey}
            className={`${songKey === currentPlayingSong ? "highlighted" : ""} ${
              (currentSongRef.current === null || currentSongRef.current?.textContent !== songValues.songTitle) &&
              "currentSong"
            }`}
            ref={songKey === currentPlayingSong ? currentSongRef : null}
          >
            <MusicNoteIcon color="action" />
            <h4 onClick={() => handleSelectSong(songKey)} className="songTitle">
              {songValues.songTitle}
            </h4>
            <div className="queueListButton">
              {currentPlayingSong !== songKey && (
                <CustomIconButton onClick={() => handleSelectSong(songKey)}>
                  <PlayArrowIcon />
                </CustomIconButton>
              )}
              <CustomIconButton color="warning" onClick={() => removeItem(songKey)}>
                <DeleteIcon />
              </CustomIconButton>
            </div>
            <div className="durationTime">
              <DurationDisplay durationInSeconds={Number(songValues.duration)} />
            </div>
          </li>
        ))}
      </ul>
    </QueueListStyled>
  );
};

export default QueueList;
