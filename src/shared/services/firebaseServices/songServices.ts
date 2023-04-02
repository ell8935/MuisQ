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
import {
  addSongInterface,
  getSongsInterface,
  removeSongInterface,
} from "../../constants/types/songTypes";
import { db } from "../firebase";

const addSong = async ({
  roomId,
  user,
  songURL,
  songTitle,
  duration,
  channelTitle,
}: addSongInterface) => {
  try {
    await addDoc(collection(db, "Rooms", roomId, "songs"), {
      uid: user.uid,
      displayName: user.displayName,
      songURL: songURL,
      songTitle: songTitle,
      duration,
      channelTitle,
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
