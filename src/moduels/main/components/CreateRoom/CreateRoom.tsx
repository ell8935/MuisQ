import React, { useState } from "react";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
// import { useAuth } from "../../../../shared/hooks/useAuth";
import { createRoom } from "../../../../shared/services/firebase";

const CreateRoom = () => {
  // const { user } = useAuth();
  const user = {};
  const [room, setRoom] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setRoom(event.target.value);
  };

  const handleCreateRoom = async () => {
    // console.log(room);
    if (room) {
      // createRoom({ roomName: room, user });
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
