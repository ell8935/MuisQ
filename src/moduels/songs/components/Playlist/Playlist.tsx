import PlaylistStyled from "./PlaylistStyled";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CustomText from "../../../../shared/components/CustomText/CustomText";

const Playlist = ({ playlistData }: any) => {
  return (
    <PlaylistStyled>
      {playlistData.map((playlist: any) => (
        <div className="data" key={playlist.id}>
          <MusicNoteIcon color="action" />
          <CustomText label={playlist.songTitle} />
        </div>
      ))}
    </PlaylistStyled>
  );
};

export default Playlist;
