import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import CreateRoom from "../CreateRoom/CreateRoom";
import RoomsSelectStyled from "./RoomsSelectStyled";
import { motion, useAnimationControls } from "framer-motion";
import Loader from "../../../../shared/components/Loader/Loader";
import { getRooms } from "../../services/roomServices";

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
          <CreateRoom />
          <ul className="listContainer">
            <h2>Choose a Room or Create</h2>
            {data?.map((room, index) => (
              <Link key={index} className="linkRoom" to={`/room?id=${room.id}`}>
                <motion.li custom={index} animate={controls} className="listItem">
                  {room.id}
                </motion.li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </RoomsSelectStyled>
  );
};

export default RoomsSelect;
