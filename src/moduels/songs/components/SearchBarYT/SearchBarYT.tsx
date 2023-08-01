import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import SearchBarYTStyled from "./SearchBarYTStyled";
import { addSong } from "../../services/songServices";
import { RootState } from "../../../../shared/redux/store";
import { formatDurationISO8601 } from "../../../../shared/utils/timeUtils";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import CustomIconButton from "../../../../shared/components/CustomIconButton/CustomIconButton";
import { SearchResult } from "../../../../shared/constants/types/generalTypes";

interface Props {
  roomId: string;
  className: string;
}

const SearchBarYT = ({ roomId, className }: Props): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const user = useSelector((state: RootState) => state.auth);
  const { songs } = useSelector((state: RootState) => state.songs);

  const queryFormatter = () => {
    if (query.includes("youtube.com")) {
      const searchParams = new URLSearchParams(query);
      const videoId = searchParams.get("v");
      setQuery(videoId ?? "");
    }
    autoComplete();
  };

  const autoComplete = async () => {
    if (query) {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_AUTOCOMPLETE_KEY}`
      );
      setResults(data.items);
    } else {
      setResults([]);
    }
  };

  const handleAddNewItem = async (result: SearchResult) => {
    const youTubeVideoId = result.id.videoId;
    const youTubeURL = `https://www.youtube.com/watch?v=${youTubeVideoId}`;

    if (Object.values(songs).some((song) => song.songURL === youTubeURL)) {
      return;
    }

    const youTubeVideoTitle = result.snippet.title;
    const youtubeChannel = result.snippet.channelTitle;
    const youtubeDuration = await getItemDuration(youTubeVideoId);

    addSong({
      user,
      roomId,
      songURL: youTubeURL,
      duration: youtubeDuration,
      songTitle: youTubeVideoTitle,
      channelTitle: youtubeChannel,
    });
  };

  const getItemDuration = async (videoId: string) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${process.env.REACT_APP_YOUTUBE_AUTOCOMPLETE_KEY}`
    );
    const tempDuration = data.items[0].contentDetails.duration;
    return formatDurationISO8601(tempDuration);
  };

  return (
    <SearchBarYTStyled className={className}>
      <div>
        <CustomInput
          value={query}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          buttonLabel="Search!"
          onClick={queryFormatter}
          placeholder="Search a song"
        />
      </div>
      <div className="suggestionsContainer">
        {results?.map((result) => (
          <li className="suggestion" key={result.id.videoId}>
            <CustomIconButton onClick={() => handleAddNewItem(result)}>
              <AddIcon sx={{ fontSize: "1.5rem" }} />
            </CustomIconButton>
            <h4>{result.snippet.title}</h4>
          </li>
        ))}
      </div>
    </SearchBarYTStyled>
  );
};

export default SearchBarYT;
