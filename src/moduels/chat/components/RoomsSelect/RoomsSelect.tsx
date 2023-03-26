import "./styles.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import Loader from "../../../../shared/components/Loader/Loader";
import CreateRoom from "../../../main/components/CreateRoom/CreateRoom";
import { getRooms } from "../../../../shared/services/firebaseServices/roomServices";
import RoomsSelectStyled from "./RoomsSelectStyled";

const RoomsSelect = () => {
  const { data, isLoading } = useQuery<DocumentData[]>({
    queryKey: ["getRooms"],
    queryFn: getRooms,
  });

  return (
    <RoomsSelectStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CreateRoom />
          <ul className="listContainer">
            <h2>Choose a Room or Create</h2>
            {data?.map((room) => (
              <Link
                key={room.id}
                className="linkRoom"
                to={`/room?id=${room.id}`}
              >
                <li className="listItem">{room.id}</li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </RoomsSelectStyled>
  );
};

export default RoomsSelect;
