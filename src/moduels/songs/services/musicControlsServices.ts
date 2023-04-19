import { onValue, ref, update } from "firebase/database";
import { realTimeDatabase } from "../../../shared/services/firebase";
import {
  RoomId,
  SkipOrPrev,
  CurrentSongInterface,
  MusicControlsInterface,
} from "../../../shared/constants/types/musicControlsTypes";

export const currentSongRTDB = ({ roomId, songs, songId }: CurrentSongInterface) => {
  if (songs) {
    update(ref(realTimeDatabase, roomId), { currentSong: songId });
  }
};

export const skipSongRTDB = ({ roomId, songs }: SkipOrPrev) => {
  if (songs) {
    const { currentSong } = readMusicControls(roomId);
    const nextKey = Object.keys(songs)[Object.keys(songs).indexOf(currentSong) + 1];
    if (nextKey) currentSongRTDB({ roomId, songs, songId: nextKey });
  }
};

export const previousSongRTDB = ({ roomId, songs }: SkipOrPrev) => {
  if (songs) {
    const { currentSong } = readMusicControls(roomId);
    const prevKey = Object.keys(songs)[Object.keys(songs).indexOf(currentSong) - 1];
    if (prevKey) currentSongRTDB({ roomId, songs, songId: prevKey });
  }
};

export const togglePlayerRTDB = ({ roomId }: RoomId) => {
  const { isPlaying } = readMusicControls(roomId);

  update(ref(realTimeDatabase, roomId), {
    isPlaying: !isPlaying,
  });
};

export const readMusicControls = (roomId: string): MusicControlsInterface => {
  const path = ref(realTimeDatabase, roomId);
  let data: MusicControlsInterface = { isPlaying: true, currentSong: "" };
  onValue(path, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};
