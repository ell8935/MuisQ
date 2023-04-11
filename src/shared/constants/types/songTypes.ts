import { UserInfo } from "firebase/auth";

interface SongProps {
  roomId: string;
  songURL: string;
  duration: number;
  songTitle: string;
  channelTitle: string;
}

export interface getSongsInterface {
  roomId: string;
  callback: (songs: any) => void;
}

export interface removeSongInterface {
  docId: string;
  roomId: string;
}

export interface Songs extends SongProps {
  id: string;
  timestamp: {};
  displayName: string;
}

export interface addSongInterface extends SongProps {
  roomId: string;
  user: Partial<UserInfo>;
}

export interface createPlaylistInterface {
  user: Partial<UserInfo>;
  songsList: {};
  playlistName?: string;
}
