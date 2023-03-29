import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Songs } from "../../../../shared/constants/types";
import { removeSong } from "../../../../shared/services/firebaseServices/songServices";
import QueueListStyled from "./QueueListStyled";

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
  const removeItem = (index: number) => {
    try {
      const docId = songsList.filter((_, i) => i === index)[0].id;
      removeSong({ roomId, docId });
    } catch (error) {
      console.log(error);
    }
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
          </li>
        ))}
      </ul>
    </QueueListStyled>
  );
};

export default QueueList;
