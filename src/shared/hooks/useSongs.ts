import { useEffect, useState } from "react";
import { Songs } from "../constants/types/songTypes";
import { getSongs } from "../../moduels/songs/services/songServices";

const useSongs = (roomId: string): [Songs[], boolean] => {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callback = (songs: Songs[]) => {
    setSongs(songs);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = getSongs({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return [songs, isLoading];
};

export default useSongs;
