import { useEffect, useState } from "react";
import { getMessages } from "../../moduels/chat/services/messageServices";

interface Message {
  id: string;
  uid: string;
  text: string;
  displayName: string;
  timestamp: { seconds: number; nanoseconds: number };
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
