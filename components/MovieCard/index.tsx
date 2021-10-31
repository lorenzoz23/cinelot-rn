import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Movie } from "../../types/Movie";
import { MovieCardStyles } from "./styles";

interface MovieCardProps {
  data: Movie;
  showMovie: (movie: Movie) => void;
}

export const MovieCard = ({ data, showMovie }: MovieCardProps) => {
  return (
    <View style={MovieCardStyles.container}>
      <TouchableOpacity onPress={() => showMovie(data)} activeOpacity={0.5}>
        <Image
          source={{
            uri: data.poster,
          }}
          style={MovieCardStyles.image}
        />
      </TouchableOpacity>
    </View>
  );
};
