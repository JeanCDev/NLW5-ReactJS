import {createContext } from 'react';

type Episode = {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  durationAsString: string;
  duration: string;
  thumbnail: string;
  description: string;
  url: string;
} 

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  togglePlay: () => void;
  play: (episodes: Episode)=> void;
  setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

