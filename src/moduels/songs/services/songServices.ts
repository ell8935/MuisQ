import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  increment,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, getExpiredDate } from "../../../shared/services/firebase";
import {
  addSongInterface,
  applyPlaylistInterface,
  createPlaylistInterface,
  deletePlaylistInterface,
  getSongsInterface,
  removeSongInterface,
} from "../../../shared/constants/types/songTypes";
import { UserInfo } from "firebase/auth";

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

const createPlaylist = async ({ user, playlistName, songs }: createPlaylistInterface) => {
  await setDoc(
    doc(db, "Users", user.uid!),
    {
      playlists: { [playlistName]: songs },
    },
    { merge: true }
  );
};

const deletePlaylist = async ({ user, playlistName }: deletePlaylistInterface): Promise<void> => {
  const docRef = doc(db, "Users", user.uid!);

  try {
    await runTransaction(db, async (transaction) => {
      const doc = await transaction.get(docRef);

      if (!doc.exists) {
        throw new Error(`Document does not exist.`);
      }

      const data = doc.data();
      const playlists = data?.playlists;

      if (!playlists || !playlists[playlistName]) {
        throw new Error(`Playlist ${playlistName} does not exist.`);
      }

      delete playlists[playlistName];

      transaction.update(docRef, { playlists });
    });
  } catch (error) {
    console.error(`Error deleting playlist: ${error}`);
    throw error;
  }
};

const getPlaylists = async (user: Partial<UserInfo>) => {
  const playlistsDoc = await getDoc(doc(db, "Users", user.uid!));
  const playlistsData = playlistsDoc.data();

  return playlistsData?.playlists;
};

const applyPlaylist = async ({ roomId, user, playlist }: applyPlaylistInterface) => {
  for (let index = 0; index < playlist.length; index++) {
    const element = playlist[index];

    await addDoc(collection(db, "Rooms", roomId, "songs"), {
      duration: element.duration,
      channelTitle: element.channelTitle,
      uid: user.uid,
      songURL: element.songURL,
      songTitle: element.songTitle,
      timestamp: serverTimestamp(),
      displayName: user.displayName,
    });
  }
  await setDoc(
    doc(db, "Rooms", roomId),
    {
      expiredTime: getExpiredDate(),
      numberOfSongs: playlist.length,
    },
    { merge: true }
  );
};

export { addSong, getSongs, removeSong, createPlaylist, deletePlaylist, getPlaylists, applyPlaylist };
