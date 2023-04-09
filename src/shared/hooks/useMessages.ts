import { useEffect, useState } from "react";
import { getMessages } from "../../moduels/chat/services/messageServices";

interface Message {
  id: string;
  uid: string;
  text: string;
  displayName: string;
  timestamp: { seconds: number; nanoseconds: number };
}

const useMessages = (roomId: string): [Message[], boolean] => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callback = (messages: Message[]) => {
    setMessages(messages);
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = getMessages({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return [messages, isLoading];
};

export default useMessages;
