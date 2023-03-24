import { useEffect, useState } from "react";
import { getMessages } from "../services/firebaseServices/messageServices";

interface Message {
  displayName: string;
  id: string;
  text: string;
}

function useMessages(roomId: string): Message[] {
  const [messages, setMessages] = useState<Message[]>([]);

  const callback = (messages: Message[]) => {
    setMessages(messages.reverse());
  };

  useEffect(() => {
    const unsubscribe = getMessages({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };
