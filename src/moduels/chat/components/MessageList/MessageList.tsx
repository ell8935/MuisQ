import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMessages } from "../../../../shared/hooks/useMessages";
import { RootState } from "../../../../shared/redux/store";
import Message from "../Message/Message";
import MessageListStyled from "./MessageListStyled";

interface MessageListProps {
  roomId: string;
}

function MessageList({ roomId }: MessageListProps) {
  const user = useSelector((state: RootState) => state.auth);
  const messages = useMessages(roomId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <MessageListStyled ref={containerRef}>
      <ul>
        {messages.map((message) => (
          <>
            <Message
              key={message.id}
              message={message}
              isOwnMessage={message.uid === user.uid}
            />
          </>
        ))}
      </ul>
    </MessageListStyled>
  );
}

export { MessageList };
