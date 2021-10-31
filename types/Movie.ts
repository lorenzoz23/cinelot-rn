import { MediaTag } from "./MediaTag";

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  imdbId: string;
  name: string;
  year: string;
  genre: Genre[];
  runtime: string;
  plot: string;
  poster: string;
  images: string[];
  rating?: string;
  userStarRating?: number;
  hasWatched?: boolean;
  mediaTags?: MediaTag[];
};
