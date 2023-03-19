import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../../../shared/hooks/useDebounce";

interface SearchResult {
    id: { videoId: string };
    snippet: { title: string };
  }
  interface Props {
    setNewItem: React.Dispatch<React.SetStateAction<{
      youTubeVideoTitle?: string;
      youTubeVideoId?: string;
      title?: string;
      url?: string;
    }>>;
  }

function SearchBarYT({ setNewItem }:Props) : JSX.Element{
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const debouncedInputValue = useDebounce({value:query, delay:300});

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && results.length > 0) {
      const youTubeVideoId = results[0].id.videoId;
      const youTubeVideoTitle = results[0].snippet.title;
      setNewItem({ youTubeVideoTitle, youTubeVideoId });
    }
  };

  const handleResultClick = (result: SearchResult) => {
    const youTubeVideoTitle = result.snippet.title;
    const youTubeVideoId = result.id.videoId;
    const youTubeURL = `https://www.youtube.com/watch?v=${youTubeVideoId}`;
    setNewItem({ title: youTubeVideoTitle, url: youTubeURL });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {results.map((result) => (
        <div key={result.id.videoId} onClick={() => handleResultClick(result)}>
          {result.snippet.title}
        </div>
      ))}
    </div>
  );
}

export default SearchBarYT;
