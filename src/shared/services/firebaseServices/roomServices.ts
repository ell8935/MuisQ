import { UserInfo } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

interface createRoomInterface {
  roomName: string;
  user: Partial<UserInfo>;
}

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

export { getRoom, getRooms, createRoom };
