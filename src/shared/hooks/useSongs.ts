import { useEffect, useState } from "react";
import { Songs } from "../constants/types/songTypes";
import { getSongs } from "../services/firebaseServices/songServices";

function useSongs(roomId: string): Songs[] {
  const [songs, setSongs] = useState<Songs[]>([]);

  const callback = (songs: Songs[]) => {
    setSongs(songs);
  };

  useEffect(() => {
    const unsubscribe = getSongs({ roomId, callback });

    return unsubscribe;
  }, [roomId]);

  return songs;
}

export { useSongs };
