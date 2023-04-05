import { useEffect, useState } from "react";
import { getMessages } from "../services/firebaseServices/messageServices";

interface Message {
  id: string;
  uid: string;
  text: string;
  displayName: string;
}

const useMessages = (roomId: string): Message[] => {
  const [messages, setMessages] = useState<Message[]>([]);

  const callback = (messages: Message[]) => {
    setMessages(messages);
  };

  useEffect(() => {
    const unsubscribe = getMessages({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return messages;
};

export default useMessages;
