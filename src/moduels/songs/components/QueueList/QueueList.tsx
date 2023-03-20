import React, { useState } from "react";
import SearchBarYT from "../SearchBarYT/SearchBarYT";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setQueueListData } from "../../../../shared/redux/reducers/QueueListSlice";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import { queueItem } from "../../../../shared/types";

interface Props {
  handleSelectSong: (index: number) => void;
}

const QueueList = ({ handleSelectSong }: Props): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const queueList = useSelector((state: RootState) => state.queueList);

  const addItem = (queueItem: queueItem) => {
    dispatch(setQueueListData([...queueList, queueItem]));
  };

  const removeItem = (index: number) => {
    const tempQueueList = [...queueList].filter((_, i) => i !== index);
    dispatch(setQueueListData(tempQueueList));
  };

  return (
    <div>
      <div>
        <SearchBarYT addItem={addItem} />
      </div>
      <h2>Queue List</h2>
      <ul>
        {queueList.map((item: queueItem, index: number) => (
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
