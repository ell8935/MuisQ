import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import HeaderBarStyled from "./HeaderBarStyled";
import { MusicQLogo } from "../../../../shared/assets/images";
interface Props {
  className: string;
}
const HeaderBar = ({ className }: Props) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, [controls]);

  return (
    <HeaderBarStyled className={className}>
      <motion.div custom={1} animate={controls} className="logo">
        <img src={MusicQLogo} alt="Logo" className="logoImage" />
      </motion.div>
      <motion.div
        custom={2}
        animate={controls}
        className="middleBox"
      ></motion.div>
      <motion.div custom={3} animate={controls} className="logout">
        <LogoutButton />
      </motion.div>
    </HeaderBarStyled>
  );
};

export default HeaderBar;
