import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import CreateRoom from "../CreateRoom/CreateRoom";
import RoomsSelectStyled from "./RoomsSelectStyled";
import Loader from "../../../../shared/components/Loader/Loader";
import { getRooms } from "../../../../shared/services/firebaseServices/roomServices";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const RoomsSelect = () => {
  const { data, isLoading } = useQuery<DocumentData[]>({
    queryKey: ["getRooms"],
    queryFn: getRooms,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }));
  }, []);

  // const listVariant = {
  //   hidden: {
  //     x: -100,
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //   },
  // };

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
                <motion.li
                  custom={index}
                  animate={controls}
                  className="listItem"
                >
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
