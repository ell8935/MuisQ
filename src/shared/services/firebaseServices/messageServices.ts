import { UserInfo } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

interface getMessagesInterface {
  roomId: string;
  callback: (messages: any) => void;
}

interface sendMessageInterface {
  roomId: string;
  user: Partial<UserInfo>;
  text: string;
}

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

export { getMessages, sendMessage };
