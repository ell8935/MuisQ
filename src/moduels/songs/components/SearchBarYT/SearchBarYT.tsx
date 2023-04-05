import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { RootState } from "../../../../shared/redux/store";
import { addSong } from "../../../../shared/services/firebaseServices/songServices";
import SearchBarYTStyled from "./SearchBarYTStyled";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import { formatDurationISO8601 } from "../../../../shared/utils/timeUtils";

interface SearchResult {
  id: { videoId: string };
  snippet: { title: string; channelTitle: string };
}

interface Props {
  roomId: string;
  className: string;
}

function SearchBarYT({ roomId, className }: Props): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const user = useSelector((state: RootState) => state.auth);

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
    const youTubeVideoTitle = result.snippet.title;
    const youTubeVideoId = result.id.videoId;
    const youTubeURL = `https://www.youtube.com/watch?v=${youTubeVideoId}`;
    const youtubeDuration = await getItemDuration(youTubeVideoId);
    const youtubeChannel = result.snippet.channelTitle;

    addSong({
      roomId,
      user,
      songURL: youTubeURL,
      songTitle: youTubeVideoTitle,
      channelTitle: youtubeChannel,
      duration: youtubeDuration,
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
      <div className="search">
        <CustomInput
          value={query}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          buttonLabel="Search!"
          onClick={queryFormatter}
        />
      </div>
      <div className="suggestionsContainer">
        {results?.map((result) => (
          <div className="suggestion" key={result.id.videoId}>
            <IconButton size="large" onClick={() => handleAddNewItem(result)}>
              <AddIcon />
            </IconButton>
            {result.snippet.title}
          </div>
        ))}
      </div>
    </SearchBarYTStyled>
  );
}

export default SearchBarYT;
