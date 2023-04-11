import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, getExpiredDate } from "../../../shared/services/firebase";
import {
  addSongInterface,
  createPlaylistInterface,
  getSongsInterface,
  removeSongInterface,
} from "../../../shared/constants/types/songTypes";
import { User, UserInfo } from "firebase/auth";

const addSong = async ({ roomId, user, songURL, songTitle, duration, channelTitle }: addSongInterface) => {
  try {
    await setDoc(
      doc(db, "Rooms", roomId),
      {
        expiredTime: getExpiredDate(),
        numberOfSongs: increment(1),
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
  await setDoc(
    doc(db, "Rooms", roomId),
    {
      expiredTime: getExpiredDate(),
      numberOfSongs: increment(-1),
    },
    { merge: true }
  );
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

const createPlaylist = async ({ user, songsList }: createPlaylistInterface) => {
  await setDoc(
    doc(db, "Users", user.uid!),
    {
      playlists: { songsList },
    },
    { merge: true }
  );
};

export { addSong, getSongs, removeSong, createPlaylist };
