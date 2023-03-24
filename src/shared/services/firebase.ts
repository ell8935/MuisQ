import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  UserInfo,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

interface createRoomInterface {
  roomName: string;
  user: Partial<UserInfo>;
}
interface getMessagesInterface {
  roomId: string;
  callback: (messages: any) => void;
}

interface sendMessageInterface {
  roomId: string;
  user: Partial<UserInfo>;
  text: string;
}
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => signOut(auth);

const createRoom = async ({
  roomName,
  user,
}: createRoomInterface): Promise<void> => {
  await setDoc(doc(db, "Rooms", roomName), {
    addedByUser: user.displayName,
    timestamp: serverTimestamp(),
  });

  await addDoc(collection(db, "Rooms", roomName, "songs"), {
    songURL: "https://www.youtube.com/watch?v=aD8crP0_k0g",
    songTitle: "Chill Drive Music - Lofi hip hop",
    uid: user.uid,
    displayName: user.displayName,
    timestamp: serverTimestamp(),
  });

  console.log(`${roomName} Created`);
};

const getRooms = async (): Promise<DocumentData[]> => {
  const rooms = await getDocs(collection(db, "Rooms"));

  return rooms.docs;
};

const getRoom = async (roomId: string): Promise<DocumentData | undefined> => {
  const room = await getDoc(doc(db, "Rooms", roomId));
  return room.data();
};

const sendMessage = async ({ roomId, user, text }: sendMessageInterface) => {
  try {
    await addDoc(collection(db, "Rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

const getMessages = ({ roomId, callback }: getMessagesInterface) => {
  return onSnapshot(
    query(
      collection(db, "Rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    }
  );
};

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

export {
  removeSong,
  getSongs,
  addSong,
  loginWithGoogle,
  sendMessage,
  getMessages,
  googleLogout,
  createRoom,
  getRooms,
  getRoom,
};

// const removeSong = async ({ roomId }: removeSongInterface) => {
//   try {
//     if (roomId === undefined) {
//       throw new Error("Values undefined");
//     }
//     await deleteDoc(doc(db, "Rooms", roomId));
//     console.log("song removed");
//   } catch (error) {
//     console.error(error);
//   }
// };
