import { UserInfo } from "firebase/auth";

interface SongProps {
  songURL: string;
  songTitle: string;
  duration: number;
  channelTitle: string;
  roomId: string;
}

export interface Songs extends SongProps {
  displayName: string;
  id: string;
  timestamp: {};
}

export interface addSongInterface extends SongProps {
  roomId: string;
  user: Partial<UserInfo>;
}

export interface getSongsInterface {
  roomId: string;
  callback: (songs: any) => void;
}

export interface removeSongInterface {
  roomId: string;
  docId: string;
}
