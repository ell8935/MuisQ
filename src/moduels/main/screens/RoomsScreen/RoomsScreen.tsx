import { useQuery } from "@tanstack/react-query";
import RoomScreenStyled from "./RoomScreenStyled";
import { useSearchParams } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Player from "../../../songs/components/Player/Player";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import SearchBarYT from "../../../songs/components/SearchBarYT/SearchBarYT";
import { getRoom } from "../../../../shared/services/firebaseServices/roomServices";
import MessageContainer from "../../../chat/components/MessageContainer/MessageContainer";

const RoomScreen = () => {
  const [searchParams] = useSearchParams();

  const roomId = searchParams.get("id") || "Main";

  const { error } = useQuery({
    queryKey: ["getRoom"],
    queryFn: () => getRoom(roomId),
  });

  if (error) return <NotFound />;

  return (
    <RoomScreenStyled>
      <HeaderBar className="header" isControls />
      <Player className="player" roomId={roomId} />
      <SearchBarYT className="searchBar" roomId={roomId} />
      <MessageContainer className="chat" roomId={roomId} />
    </RoomScreenStyled>
  );
};

export default RoomScreen;
