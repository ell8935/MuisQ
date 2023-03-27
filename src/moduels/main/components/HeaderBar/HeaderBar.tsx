import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
const HeaderBar = () => {
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
    <>
      <motion.div custom={1} animate={controls} className="logo">
        logo
      </motion.div>
      <motion.div
        custom={2}
        animate={controls}
        className="middleBox"
      ></motion.div>
      <motion.div custom={3} animate={controls} className="logout">
        <LogoutButton />
      </motion.div>
    </>
  );
};

export default HeaderBar;
