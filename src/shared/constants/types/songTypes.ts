import { UserInfo } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

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
  songs: {};
  playlistName: string;
}

export interface applyPlaylistInterface {
  roomId: string;
  user: Partial<UserInfo>;
  playlist: DocumentData;
}

export interface deletePlaylistInterface {
  user: Partial<UserInfo>;
  playlistName: string;
}
