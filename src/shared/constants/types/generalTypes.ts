export interface CustomTextInterface {
  label?: string;
  size?: string;
  className?: string;
}

export interface SearchResult {
  id: { videoId: string };
  snippet: { title: string; channelTitle: string };
}
