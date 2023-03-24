import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../shared/redux/store";
import { createRoom } from "../../../../shared/services/firebase";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";

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
    <>
      <CustomInput value={roomName} onChange={handleNameChange} />
      <button disabled={!roomName} onClick={handleCreateRoom}>
        Create Room
      </button>
    </>
  );
};

export default CreateRoom;
