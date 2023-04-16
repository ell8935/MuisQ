import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import CreateRoom from "../CreateRoom/CreateRoom";
import RoomsSelectStyled from "./RoomsSelectStyled";
import { motion, useAnimationControls } from "framer-motion";
import Loader from "../../../../shared/components/Loader/Loader";
import { getRooms } from "../../services/roomServices";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const RoomsSelect = () => {
  const controls = useAnimationControls();
  const { data, isLoading } = useQuery<DocumentData[]>({
    queryKey: ["getRooms"],
    queryFn: getRooms,
  });

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <RoomsSelectStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="explanation">
            <span>Share</span> music with anyone, anywhere with <span>MusiQ</span>. Create your playlist and{" "}
            <span>start jamming!</span>
          </p>
          <div className="roomSelectCreateContainer">
            <h3>Choose a Room or Create</h3>
            <CreateRoom />
            <ul className="listContainer">
              {data?.map((room, index) => (
                <Link key={index} className="linkRoom" to={`/room?id=${room.id}`}>
                  <motion.li custom={index} animate={controls} className="listItem">
                    {room.id}
                    <span>
                      {room._document.data.value.mapValue.fields.numberOfSongs.integerValue}
                      <MusicNoteIcon color="action" />
                    </span>
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </RoomsSelectStyled>
  );
};

export default RoomsSelect;
