import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Player from "../../../songs/components/Player/Player";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import { getRoom } from "../../../../shared/services/firebaseServices/roomServices";
import RoomScreenStyled from "./RoomScreenStyled";
import SearchBarYT from "../../../songs/components/SearchBarYT/SearchBarYT";
import MessageContainer from "../../../chat/components/MessageContainer/MessageContainer";
import MusicControls from "../../../songs/components/MusicControls/MusicControls";

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
      <MusicControls />
      <Player className="player" roomId={roomId} />
      <SearchBarYT className="searchBar" roomId={roomId} />
      <MessageContainer className="chat" roomId={roomId} />
    </RoomScreenStyled>
  );
}

export { RoomScreen };
