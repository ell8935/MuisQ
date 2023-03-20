import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRooms } from "../../../../shared/services/firebase";
import CreateRoom from "../../../main/components/CreateRoom/CreateRoom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

const RoomsSelect = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const handleGetRooms = async () => {
      const roomsGot: any = await getRooms();
      setRooms(roomsGot);
    };
    handleGetRooms();
  }, []);

  return (
    <>
      <CreateRoom></CreateRoom>
      <h2>Choose a Chat Room</h2>
      <ul className="chat-room-list">
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoomsSelect;
