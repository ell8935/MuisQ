import { UserInfo } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from "../../../shared/services/firebase";
import { getExpiredDate } from "../../../shared/utils/timeUtils";
import { realTimeDatabase } from "../../../shared/services/firebase";
import { collection, doc, DocumentData, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";

interface createRoomInterface {
  roomName: string;
  user: Partial<UserInfo>;
}

const createRoom = async ({ roomName, user }: createRoomInterface): Promise<void> => {
  await setDoc(doc(db, "Rooms", roomName), {
    addedByUser: user.displayName,
    timestamp: serverTimestamp(),
    expiredTime: getExpiredDate(),
    numberOfSongs: 1,
  });

  await setDoc(doc(db, "Rooms", roomName, "songs", "firstSong"), {
    uid: user.uid,
    displayName: user.displayName,
    songURL: "https://www.youtube.com/watch?v=Gs069dndIYk",
    songTitle: "Earth, Wind & Fire - September",
    duration: 201,
    channelTitle: "Earth Wind & Fire",
    timestamp: serverTimestamp(),
  });

  set(ref(realTimeDatabase, roomName), {
    currentSong: "firstSong",
    isPlaying: true,
  });
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
