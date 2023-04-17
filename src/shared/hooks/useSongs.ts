/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Songs } from "../constants/types/songTypes";
import { getSongs } from "../../moduels/songs/services/songServices";
import { setSongListLength } from "../redux/reducers/musicControlsSlice";

interface useSongsPromise {
  songs: Songs[];
  isLoading: boolean;
}
const useSongs = (roomId: string): useSongsPromise => {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const callback = (songs: Songs[]) => {
    setSongs(songs);
    dispatch(setSongListLength(songs.length));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = getSongs({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return { songs, isLoading };
};

export default useSongs;
