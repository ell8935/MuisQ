import TimeSent from "../TimeSent/TimeSent";
import MessageStyled from "./MessageStyled";

interface MessageProps {
  message: { displayName: string; text: string; timestamp: { seconds: number; nanoseconds: number } };
  isOwnMessage: boolean;
}

const Message = ({ message, isOwnMessage }: MessageProps) => {
  const { displayName, text, timestamp } = message;

  return (
    <MessageStyled isOwnMessage={isOwnMessage}>
      <li className={["message", isOwnMessage && "own-message"].join(" ")}>
        <h5 className="sender">{isOwnMessage ? "" : displayName}</h5>
        <div>{text}</div>
        {timestamp && <TimeSent durationInSeconds={timestamp.seconds} durationInNanoSeconds={timestamp.nanoseconds} />}
      </li>
    </MessageStyled>
  );
};

export default Message;
