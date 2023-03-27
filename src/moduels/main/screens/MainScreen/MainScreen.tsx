import MainScreenStyled from "./MainScreenStyled";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomsSelect from "../../components/RoomsSelect/RoomsSelect";
import ExplanationBox from "../../components/ExplanationBox/ExplanationBox";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const MainScreen = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, []);
  return (
    <MainScreenStyled>
      <HeaderBar />
      <motion.div custom={4} animate={controls} className="explanationBox">
        <ExplanationBox />
      </motion.div>
      <motion.div custom={5} animate={controls} className="functionalBox">
        <RoomsSelect />
      </motion.div>
    </MainScreenStyled>
  );
};

export default MainScreen;

{
  /* <motion.div custom={1} animate={controls} className="logo">
  logo
</motion.div>
<motion.div
  custom={2}
  animate={controls}
  className="middleBox"
></motion.div>
<motion.div custom={3} animate={controls} className="logout">
  <LogoutButton />
</motion.div> */
}
