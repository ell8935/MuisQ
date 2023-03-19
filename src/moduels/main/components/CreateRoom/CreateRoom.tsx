import React, { useState } from "react";
import { createRoom } from "../../../../../../../MusiQ/src/services/firebase";
import { useAuth } from "../../../../../../../MusiQ/src/shared/hooks/useAuth";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";

const CreateRoom = () => {
  const { user } = useAuth();
  const [room, setRoom] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setRoom(event.target.value);
  };

  const handleCreateRoom = async () => {
    // console.log(room);
    if (room) {
      createRoom(room, user);
      setRoom("");
    }
  };
  return (
    <>
      <CustomInput value={room} onChange={handleNameChange} />
      <button onClick={handleCreateRoom}>Create Room</button>;
    </>
  );
};

export default CreateRoom;
