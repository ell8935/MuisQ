import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import Player from "../../../songs/components/Player/Player";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import { MessageList } from "../../../chat/components/MessageList/MessageList";
import { MessageInput } from "../../../chat/components/MessageInput/MessageInput";
import { getRoom } from "../../../../shared/services/firebaseServices/roomServices";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomScreenStyled from "./RoomScreenStyled";

function RoomScreen() {
  const [searchParams] = useSearchParams();

  const roomId = searchParams.get("id") || "Main";

  const { error } = useQuery({
    queryKey: ["getRoom"],
    queryFn: () => getRoom(roomId),
  });

  if (error) return <NotFound />;

  return (
    <RoomScreenStyled>
      <HeaderBar />
      <div>
        <Player roomId={roomId} />
        <MessageList roomId={roomId} />
        <MessageInput roomId={roomId} />
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
    </RoomScreenStyled>
  );
}

export { RoomScreen };
