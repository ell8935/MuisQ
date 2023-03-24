import "./styles.css";
import { useSelector } from "react-redux";
import { MessageList } from "../MessageList/MessageList";
import { Link, useSearchParams } from "react-router-dom";
import { RootState } from "../../../../shared/redux/store";
import { MessageInput } from "../MessageInput/MessageInput";
import NotFound from "../../../auth/components/NotFound404/NotFound404";

const ChatRoom = () => {
  const [searchParams] = useSearchParams();
  const rooms = useSelector((state: RootState) => state.rooms);

  const roomId = searchParams.get("id");

  const room = rooms.find((room) => room === roomId);

  if (!room) return <NotFound />;

  return (
    <div className="chatroom">
      <span>{room}</span>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>

      <MessageList roomId={room} />
      <MessageInput roomId={room} />
    </div>
  );
};

export default ChatRoom;
