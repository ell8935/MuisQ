import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBarYT from "../SearchBarYT/SearchBarYT";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { RootState } from "../../../../shared/redux/store";
import { queueItem, Songs } from "../../../../shared/constants/types";
import {
  addSong,
  removeSong,
} from "../../../../shared/services/firebaseServices/songServices";

interface Props {
  handleSelectSong: (index: number) => void;
  roomId: string;
  songsList: Songs[];
}

const QueueList = ({
  songsList,
  handleSelectSong,
  roomId,
}: Props): JSX.Element => {
  const user = useSelector((state: RootState) => state.auth);

  const addItem = (queueItem: queueItem) => {
    addSong({
      roomId,
      user,
      songURL: queueItem.url,
      songTitle: queueItem.title,
    });
  };

  const removeItem = (index: number) => {
    try {
      const docId = songsList.filter((_, i) => i === index)[0].id;
      removeSong({ roomId, docId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <SearchBarYT addItem={addItem} />
      </div>
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
    </div>
  );
};

export default QueueList;
