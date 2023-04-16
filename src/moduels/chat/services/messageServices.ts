import { db, getExpiredDate } from "../../../shared/services/firebase";
import { getMessagesInterface, sendMessageInterface } from "../../../shared/constants/types/messageTypes";
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";

const sendMessage = async ({ roomId, user, text }: sendMessageInterface) => {
  try {
    await setDoc(
      doc(db, "Rooms", roomId),
      {
        expiredTime: getExpiredDate(),
      },
      { merge: true }
    );

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
    query(collection(db, "Rooms", roomId, "messages"), orderBy("timestamp", "asc")),
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
