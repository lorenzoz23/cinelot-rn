import { MediaTag } from "./MediaTag";

export type Movie = {
  name: string;
  year: string;
  rating: string;
  genre: any[];
  runtime: string;
  plot: string;
  poster: string;
  images: string[];
  id: number;
  imdbId: string;
  starRating: number;
  watched: boolean;
  mediaTags: MediaTag[];
};
