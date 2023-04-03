import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";
import { motion, useAnimationControls } from "framer-motion";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlined from "@mui/icons-material/SkipPreviousOutlined";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import {
  previousSong,
  setTogglePlayer,
  skipSong,
} from "../../../../shared/redux/reducers/musicControlsSlice";
import { IconButton } from "@mui/material";
import MusicControlStyled from "./MusicControlsStyled";
import { MusicQLogo } from "../../../../shared/assets/images";
interface Props {
  className: string;
}

const MusicControls = ({ className }: Props) => {
  const controls = useAnimationControls();
  const { togglePlayer } = useSelector(
    (state: RootState) => state.musicControls
  );
  const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   controls.set({ opacity: 0, x: 100 });

  //   controls.start((i) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: { delay: i * 0.05 },
  //   }));
  // }, []);

  const togglePlayerPausePlay = () => {
    dispatch(setTogglePlayer(!togglePlayer));
  };

  return (
    <MusicControlStyled className={className}>
      <motion.div custom={1} animate={controls} className="logo">
        <img src={MusicQLogo} alt="Logo" className="logoImage" />
      </motion.div>
      <motion.div custom={2} animate={controls} className="controlBox">
        <IconButton onClick={() => dispatch(previousSong())}>
          <SkipPreviousOutlined sx={{ fontSize: 35 }}></SkipPreviousOutlined>
        </IconButton>

        <IconButton onClick={togglePlayerPausePlay}>
          {togglePlayer ? (
            <PauseOutlined sx={{ fontSize: 35 }}></PauseOutlined>
          ) : (
            <PlayArrowOutlined sx={{ fontSize: 35 }}></PlayArrowOutlined>
          )}
        </IconButton>

        <IconButton onClick={() => dispatch(skipSong())}>
          <SkipNextOutlined sx={{ fontSize: 35 }}></SkipNextOutlined>
        </IconButton>
      </motion.div>

      <motion.div custom={3} animate={controls} className="logout">
        <LogoutButton />
      </motion.div>
    </MusicControlStyled>
  );
};

export default MusicControls;
