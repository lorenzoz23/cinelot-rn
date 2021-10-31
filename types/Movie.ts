import { MediaTag } from "./MediaTag";

export type Movie = {
  id: number;
  imdbId: string;
  name: string;
  year: string;
  genre: string[];
  runtime: string;
  plot: string;
  poster: string;
  rating?: string;
  images?: string[];
  userStarRating?: number;
  hasWatched?: boolean;
  mediaTags?: MediaTag[];
};
