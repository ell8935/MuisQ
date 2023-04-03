import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../shared/redux/store";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import { createRoom } from "../../../../shared/services/firebaseServices/roomServices";
import CreateRoomStyled from "./CreateRoomStyled";

const CreateRoom = () => {
  const user = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleCreateRoom = async () => {
    try {
      await createRoom({ roomName, user });
      navigate(`/room?id=${roomName}`);
    } catch (error) {
      throw new Error("Unable to create room");
    }
  };

  return (
    <CreateRoomStyled>
      <CustomInput
        value={roomName}
        onChange={handleNameChange}
        placeHolder="e.g Rock and Roll"
        buttonLabel="Create"
        onClick={handleCreateRoom}
        minLength={1}
      />
    </CreateRoomStyled>
  );
};

export default CreateRoom;
