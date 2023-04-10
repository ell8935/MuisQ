import { UserInfo } from "firebase/auth";
import { db, getExpiredDate } from "../../../shared/services/firebase";
import { addDoc, collection, doc, DocumentData, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";

interface createRoomInterface {
  roomName: string;
  user: Partial<UserInfo>;
}

const createRoom = async ({ roomName, user }: createRoomInterface): Promise<void> => {
  await setDoc(doc(db, "Rooms", roomName), {
    addedByUser: user.displayName,
    timestamp: serverTimestamp(),
    expiredTime: getExpiredDate(),
    numberOfsongs: 1,
  });

  await addDoc(collection(db, "Rooms", roomName, "songs"), {
    uid: user.uid,
    displayName: user.displayName,
    songURL: "https://www.youtube.com/watch?v=Gs069dndIYk",
    songTitle: "Earth, Wind & Fire - September",
    duration: 201,
    channelTitle: "Earth Wind & Fire",
    timestamp: serverTimestamp(),
  });

  console.log(`${roomName} Created`);
};

const getRooms = async (): Promise<DocumentData[]> => {
  const rooms = await getDocs(collection(db, "Rooms"));
  console.log(rooms);

  return rooms.docs;
};

const getRoom = async (roomId: string): Promise<DocumentData | undefined> => {
  const room = await getDoc(doc(db, "Rooms", roomId));

  return room.data();
};

export { getRoom, getRooms, createRoom };
