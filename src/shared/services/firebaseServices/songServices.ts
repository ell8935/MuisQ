import { UserInfo } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

interface getSongsInterface {
  roomId: string;
  callback: (songs: any) => void;
}
interface addSongInterface {
  roomId: string;
  user: Partial<UserInfo>;
  songURL: string;
  songTitle: string;
}
interface removeSongInterface {
  roomId: string;
  docId: string;
}

const addSong = async ({
  roomId,
  user,
  songURL,
  songTitle,
}: addSongInterface) => {
  try {
    await addDoc(collection(db, "Rooms", roomId, "songs"), {
      uid: user.uid,
      displayName: user.displayName,
      songURL: songURL,
      songTitle: songTitle,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

const removeSong = async ({ roomId, docId }: removeSongInterface) => {
  await deleteDoc(doc(db, "Rooms", roomId, "songs", docId));
};

const getSongs = ({ roomId, callback }: getSongsInterface) => {
  return onSnapshot(
    query(
      collection(db, "Rooms", roomId, "songs"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const songs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(songs);
    }
  );
};

export { addSong, getSongs, removeSong };
