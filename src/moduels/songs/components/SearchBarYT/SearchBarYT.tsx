import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../../../shared/hooks/useDebounce";
import AddIcon from "@mui/icons-material/Add";
import { queueItem } from "../../../../shared/types";
interface SearchResult {
  id: { videoId: string };
  snippet: { title: string };
}
interface Props {
  addItem: (queueItem: queueItem) => void;
}

function SearchBarYT({ addItem }: Props): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const debouncedInputValue = useDebounce({ value: query, delay: 300 });

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
    addItem({ title: youTubeVideoTitle, url: youTubeURL });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      {results.map((result) => (
        <div key={result.id.videoId}>
          {result.snippet.title}
          <IconButton onClick={() => handleAddNewItem(result)}>
            <AddIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default SearchBarYT;
