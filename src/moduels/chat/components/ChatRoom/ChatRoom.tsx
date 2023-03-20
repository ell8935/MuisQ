import { Link, useParams, useSearchParams } from "react-router-dom";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import { chatRooms } from "../../data/chatRooms";
import { MessageInput } from "../MessageInput/MessageInput";
import { MessageList } from "../MessageList/MessageList";
import "./styles.css";

function ChatRoom() {
  const [searchParams] = useSearchParams();

  const roomId = searchParams.get("id");

  const room = chatRooms.find((room) => room.id === roomId);

  if (!room) return <NotFound />;

  return (
    <div className="chatroom">
      <span>{room.title}</span>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>

      <MessageList roomId={room.id} />
      <MessageInput roomId={room.id} />
    </div>
  );
}

export { ChatRoom };
