import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import Player from "../../../songs/components/Player/Player";
import { getRoom } from "../../../../shared/services/firebase";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import { MessageList } from "../../../chat/components/MessageList/MessageList";
import { MessageInput } from "../../../chat/components/MessageInput/MessageInput";

function RoomScreen() {
  const [searchParams] = useSearchParams();

  const roomId = searchParams.get("id") || "Main";

  const { error } = useQuery({
    queryKey: ["getRoom"],
    queryFn: () => getRoom(roomId),
  });

  if (error) return <NotFound />;

  return (
    <div className="chatroom">
      <span>{roomId}</span>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
        <Player roomId={roomId} />
        <MessageList roomId={roomId} />
        <MessageInput roomId={roomId} />
      </div>
    </div>
  );
}

export { RoomScreen };
