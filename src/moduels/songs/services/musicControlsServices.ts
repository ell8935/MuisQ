import { onValue, ref, update } from "firebase/database";
import { realTimeDatabase } from "../../../shared/services/firebase";
import {
  RoomId,
  SkipOrPrev,
  CurrentSongInterface,
  VolumeLevelInterface,
  MusicControlsInterface,
} from "../../../shared/constants/types/musicControlsTypes";

export const currentSongRTDB = ({ roomId, songs, songId }: CurrentSongInterface) => {
  const { currentSong } = readMusicControls(roomId);

  if (!currentSong && songs) {
    update(ref(realTimeDatabase, roomId), { currentSong: Object.keys(songs)[0] });
  } else if (songs) {
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

export const toggleMuteRTDB = ({ roomId }: RoomId) => {
  const { toggleMute } = readMusicControls(roomId);
  update(ref(realTimeDatabase, roomId), {
    toggleMute: !toggleMute,
  });
  const data = readMusicControls(roomId);
  return data;
};

export const volumeLevelRTDB = ({ roomId, volume }: VolumeLevelInterface) => {
  update(ref(realTimeDatabase, roomId), {
    volumeLevel: volume,
  });
  const data = readMusicControls(roomId);
  return data;
};

export const readMusicControls = (roomId: string): MusicControlsInterface => {
  const path = ref(realTimeDatabase, roomId);
  let data: MusicControlsInterface = { isPlaying: true, currentSong: "", toggleMute: false, volumeLevel: 1 };
  onValue(path, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};
