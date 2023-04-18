import { Songs } from "./songTypes";

export interface MusicControlsInterface {
  isPlaying: boolean;
  currentSong: string;
  toggleMute: boolean;
  volumeLevel: number;
}

export interface RoomId {
  roomId: string;
}

export interface SkipOrPrev extends RoomId {
  songs: Songs;
}

export interface CurrentSongInterface extends SkipOrPrev {
  songId: string;
}

export interface VolumeLevelInterface extends RoomId {
  volume: number;
}
