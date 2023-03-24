import "./styles.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import CreateRoom from "../../../main/components/CreateRoom/CreateRoom";
import { getRooms } from "../../../../shared/services/firebaseServices/roomServices";

const RoomsSelect = () => {
  const { data, isLoading, error } = useQuery<DocumentData[]>({
    queryKey: ["getRooms"],
    queryFn: getRooms,
  });

  return (
    <>
      <CreateRoom />
      <h2>Choose a Room or create</h2>
      <ul className="chat-room-list">
        {data?.map((room) => (
          <li key={room.id}>
            <Link to={`/room?id=${room.id}`}>{room.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoomsSelect;
