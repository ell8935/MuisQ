import MessageStyled from "./MessageStyled";

interface MessageProps {
  message: { displayName: string; text: string };
  isOwnMessage: boolean;
}

const Message = ({ message, isOwnMessage }: MessageProps) => {
  const { displayName, text } = message;

  return (
    <MessageStyled isOwnMessage={isOwnMessage}>
      <li className={["message", isOwnMessage && "own-message"].join(" ")}>
        <h5 className="sender">{isOwnMessage ? "" : displayName}</h5>
        <div>{text}</div>
      </li>
    </MessageStyled>
  );
};

export default Message;
