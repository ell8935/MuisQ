import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, getExpiredDate } from "../firebase";
import { addSongInterface, getSongsInterface, removeSongInterface } from "../../constants/types/songTypes";

const addSong = async ({ roomId, user, songURL, songTitle, duration, channelTitle }: addSongInterface) => {
  try {
    await setDoc(
      doc(db, "Rooms", roomId),
      {
        expiredTime: getExpiredDate(),
      },
      { merge: true }
    );

    await addDoc(collection(db, "Rooms", roomId, "songs"), {
      duration,
      channelTitle,
      uid: user.uid,
      songURL: songURL,
      songTitle: songTitle,
      timestamp: serverTimestamp(),
      displayName: user.displayName,
    });
  } catch (error) {
    console.error(error);
  }
};

const removeSong = async ({ roomId, docId }: removeSongInterface) => {
  await deleteDoc(doc(db, "Rooms", roomId, "songs", docId));
};

const getSongs = ({ roomId, callback }: getSongsInterface) => {
  return onSnapshot(query(collection(db, "Rooms", roomId, "songs"), orderBy("timestamp", "asc")), (querySnapshot) => {
    const songs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(songs);
  });
};

export { addSong, getSongs, removeSong };
