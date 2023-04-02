import { UserInfo } from "firebase/auth";

export interface Songs {
  displayName: string;
  id: string;
  songURL: string;
  songTitle: string;
  duration: string;
  channelTitle: string;
  timestamp: {};
}

export interface getSongsInterface {
  roomId: string;
  callback: (songs: any) => void;
}
export interface addSongInterface {
  roomId: string;
  user: Partial<UserInfo>;
  songURL: string;
  songTitle: string;
  duration: number;
  channelTitle: string;
}
export interface removeSongInterface {
  roomId: string;
  docId: string;
}
