import { useEffect } from "react";
import MainScreenStyled from "./MainScreenStyled";
import ImageBox from "../../components/ImageBox/ImageBox";
import { motion, useAnimationControls } from "framer-motion";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomsSelect from "../../components/RoomsSelect/RoomsSelect";

const MainScreen = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <MainScreenStyled>
      <HeaderBar roomId="" className="header" />
      <motion.div custom={4} animate={controls} className="imageBox">
        <ImageBox />
      </motion.div>
      <motion.div custom={5} animate={controls} className="functionalBox">
        <RoomsSelect />
      </motion.div>
    </MainScreenStyled>
  );
};

export default MainScreen;
