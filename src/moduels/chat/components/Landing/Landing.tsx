import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { getRooms } from "../../../../shared/services/firebase";
import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
import CreateRoom from "../../../main/components/CreateRoom/CreateRoom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

const Landing = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const handleGetRooms = async () => {
      const roomsGot:any = await getRooms();
      // console.log(roomsGot);
      setRooms(roomsGot);
    };
    handleGetRooms();
  }, []);

  return (
    <>
      <CreateRoom></CreateRoom>
      <LogoutButton></LogoutButton>
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

export { Landing };
