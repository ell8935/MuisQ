import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMessages } from "../../../../shared/hooks/useMessages";
import { AppDispatch, RootState } from "../../../../shared/redux/store";
import "./styles.css";

interface MessageListProps {
  roomId: string;
}

interface MessageProps {
  message: { displayName: string; text: string };
  isOwnMessage: boolean;
}

function MessageList({ roomId }: MessageListProps) {
  const dispatch: AppDispatch = useDispatch();
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

function Message({ message, isOwnMessage }: MessageProps) {
  const { displayName, text } = message;

  return (
    <li className={["message", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>
      <div>{text}</div>
    </li>
  );
}

export { MessageList };
