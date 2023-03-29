import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../../../shared/hooks/useDebounce";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { RootState } from "../../../../shared/redux/store";
import { addSong } from "../../../../shared/services/firebaseServices/songServices";
import SearchBarYTStyled from "./SearchBarYTStyled";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
interface SearchResult {
  id: { videoId: string };
  snippet: { title: string };
}

interface Props {
  roomId: string;
  className: string;
}

function SearchBarYT({ roomId, className }: Props): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const debouncedInputValue = useDebounce({ value: query, delay: 300 });
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (debouncedInputValue) {
      autoComplete(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  const autoComplete = async (query: string) => {
    if (query) {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyBJZnCO6LQLXEIuTbWnV8QN-B-hnNHIP2g`
      );
      setResults(data.items);
    } else {
      setResults([]);
    }
  };

  const handleAddNewItem = (result: SearchResult) => {
    const youTubeVideoTitle = result.snippet.title;
    const youTubeVideoId = result.id.videoId;
    const youTubeURL = `https://www.youtube.com/watch?v=${youTubeVideoId}`;
    addSong({
      roomId,
      user,
      songURL: youTubeURL,
      songTitle: youTubeVideoTitle,
    });
  };

  return (
    <SearchBarYTStyled className={className}>
      <CustomInput
        label="Search a song"
        value={query}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div className="suggestionsContainer">
        {results.map((result) => (
          <div key={result.id.videoId}>
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
