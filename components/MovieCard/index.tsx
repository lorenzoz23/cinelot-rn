import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Movie } from "../../types/Movie";
import { MovieCardStyles } from "./styles";

interface MovieCardProps {
  data: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const { data } = props;
  return (
    <View style={MovieCardStyles.container}>
      <TouchableOpacity>
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

export default MovieCard;
