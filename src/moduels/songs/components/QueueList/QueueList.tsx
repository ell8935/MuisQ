import SearchBarYT from "../SearchBarYT/SearchBarYT";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setQueueListData } from "../../../../shared/redux/reducers/QueueListSlice";

interface Props {
  handleSelectSong: (index: any) => void;
}
interface newItem {
  title?: string;
  url?: string;
}

const QueueList = ({ handleSelectSong }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const queueList = useSelector((state: any) => state.queueList);
  const [newItem, setNewItem] = useState<newItem>({});

  const addItem = () => {
    if (newItem) {
      const itemExists = queueList.find(
        (item: any) => item.url === newItem.url
      );
      if (!itemExists) {
        dispatch(setQueueListData([...queueList, newItem]));
        console.log(queueList);
        setNewItem({});
      }
    }
  };

  const removeItem = (index: number) => {
    const tempQueueList = [...queueList].filter((_, i) => i !== index);
    dispatch(setQueueListData(tempQueueList));
  };

  return (
    <div>
      <div>
        <SearchBarYT setNewItem={setNewItem} />
        <button onClick={addItem}>Add Song</button>
      </div>
      <h2>Queue List</h2>
      <ul>
        {queueList.map((item: newItem, index: number) => (
          <li key={index}>
            <IconButton onClick={() => handleSelectSong(index)}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
