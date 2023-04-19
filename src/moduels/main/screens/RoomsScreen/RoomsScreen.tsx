/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { onValue, ref } from "firebase/database";
import RoomScreenStyled from "./RoomScreenStyled";
import { useSearchParams } from "react-router-dom";
import { getRoom } from "../../services/roomServices";
import useSongs from "../../../../shared/hooks/useSongs";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Player from "../../../songs/components/Player/Player";
import { AppDispatch } from "../../../../shared/redux/store";
import { realTimeDatabase } from "../../../../shared/services/firebase";
import NotFound from "../../../auth/components/NotFound404/NotFound404";
import SearchBarYT from "../../../songs/components/SearchBarYT/SearchBarYT";
import { setLoading, setSongs } from "../../../../shared/redux/reducers/songsSlice";
import MessageContainer from "../../../chat/components/MessageContainer/MessageContainer";
import { MusicControlsInterface } from "../../../../shared/constants/types/musicControlsTypes";

const RoomScreen = () => {
  const [searchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const roomId = searchParams.get("id") || "Main";
  const { songs, isLoading } = useSongs(roomId);
  const [playerDetails, setPlayerDetails] = useState<MusicControlsInterface>({ isPlaying: true, currentSong: "" });

  const { error } = useQuery({
    queryKey: ["getRoom"],
    queryFn: () => getRoom(roomId),
  });

  useEffect(() => {
    dispatch(setSongs(songs));
    dispatch(setLoading(isLoading));
  }, [songs]);

  useEffect(() => {
    const path = ref(realTimeDatabase, roomId);
    onValue(path, (snapshot) => {
      setPlayerDetails(snapshot.val());
    });
  }, []);

  if (error) return <NotFound />;

  return (
    <RoomScreenStyled>
      <HeaderBar className="header" isMusicControls roomId={roomId} playerDetails={playerDetails} />
      <Player className="player" roomId={roomId} playerDetails={playerDetails} />
      <SearchBarYT className="searchBar" roomId={roomId} />
      <MessageContainer className="chat" roomId={roomId} />
    </RoomScreenStyled>
  );
};

export default RoomScreen;
