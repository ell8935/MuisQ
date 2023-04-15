import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBarStyled from "./HeaderBarStyled";
import { motion, useAnimationControls } from "framer-motion";
import { MusiQWithName } from "../../../../shared/assets/images";
import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
import MusicControls from "../../../songs/components/MusicControls/MusicControls";

interface Props {
  className: string;
  isMusicControls?: boolean;
}

const HeaderBar = ({ className, isMusicControls }: Props) => {
  const navigate = useNavigate();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, [controls]);

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <HeaderBarStyled className={className}>
      <motion.div custom={1} animate={controls} className="logo" onClick={handleNavigateToHome}>
        <img src={MusiQWithName} alt="Logo" />
      </motion.div>

      <motion.div custom={2} animate={controls} className="controls">
        {isMusicControls ? <MusicControls /> : ""}
      </motion.div>

      <motion.div custom={3} animate={controls} className="logout">
        <LogoutButton />
      </motion.div>
    </HeaderBarStyled>
  );
};

export default HeaderBar;
