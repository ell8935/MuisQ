import React, { useState } from "react";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
interface Props {
  onClick: () => void;
}
const PlaylistModal = ({ onClick }: Props) => {
  const [playlistName, setPlaylistName] = useState("");

  return (
    <CustomInput
      buttonLabel="Create Playlist"
      onClick={onClick}
      value={playlistName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlaylistName(e.target.value)}
    />
  );
};

export default PlaylistModal;
