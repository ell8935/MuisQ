import { useSelector } from "react-redux";
import { useMessages } from "../../../../shared/hooks/useMessages";
import { RootState } from "../../../../shared/redux/store";
import Message from "../Message/Message";
import "./styles.css";

interface MessageListProps {
  roomId: string;
}

function MessageList({ roomId }: MessageListProps) {
  const user = useSelector((state: RootState) => state.auth);
  const messages = useMessages(roomId);

  return (
    <ul className="message-list">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isOwnMessage={message.id === user.uid}
        />
      ))}
    </ul>
  );
}

export { MessageList };
