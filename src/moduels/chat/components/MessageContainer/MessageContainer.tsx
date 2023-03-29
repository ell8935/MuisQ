import { MessageInput } from "../MessageInput/MessageInput";
import { MessageList } from "../MessageList/MessageList";
import MessageContainerStyled from "./MessageContainerStyled";

interface Props {
  roomId: string;
  className: string;
}
const MessageContainer = ({ roomId, className }: Props) => {
  return (
    <MessageContainerStyled className={className}>
      <MessageList roomId={roomId} />
      <MessageInput roomId={roomId} />
    </MessageContainerStyled>
  );
};

export default MessageContainer;
