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

const MusicControls = () => {
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
    console.log(togglePlayer);

    dispatch(setTogglePlayer(!togglePlayer));
  };

  return (
    <>
      <motion.div custom={1} animate={controls} className="logo">
        logo
      </motion.div>
      <motion.div custom={2} animate={controls} className="controlBox">
        <div
          // style={{
          //   width: "50px",
          //   height: "50px",
          //   backgroundColor: "blue",
          //   color: "black",
          // }}
          onClick={togglePlayerPausePlay}
        >
          {togglePlayer ? (
            <PauseOutlined sx={{ fontSize: 50 }}></PauseOutlined>
          ) : (
            <PlayArrowOutlined sx={{ fontSize: 50 }}></PlayArrowOutlined>
          )}
        </div>

        <IconButton onClick={() => dispatch(skipSong())}>
          <SkipNextOutlined></SkipNextOutlined>
        </IconButton>

        <IconButton onClick={() => dispatch(previousSong())}>
          <SkipPreviousOutlined sx={{ fontSize: 50 }}></SkipPreviousOutlined>
        </IconButton>
      </motion.div>
      <motion.div custom={3} animate={controls} className="logout">
        <LogoutButton />
      </motion.div>
    </>
  );
};

export default MusicControls;
