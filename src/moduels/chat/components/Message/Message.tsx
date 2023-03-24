interface MessageProps {
  message: { displayName: string; text: string };
  isOwnMessage: boolean;
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

export default Message;
