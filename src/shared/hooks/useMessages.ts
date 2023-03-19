import React, { useEffect, useState } from "react";
import { getMessages } from "../services/firebase";

function useMessages(roomId: string) {
  const [messages, setMessages] = useState([]);

  const callback = (messages: any) => {
    setMessages;
  };

  useEffect(() => {
    const unsubscribe = getMessages({ roomId, callback });
    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };
