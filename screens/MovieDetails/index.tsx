import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Movie } from "../../types/Movie";
import { MovieDetailsStyles } from "./styles";
import { MonoText as Text } from "../../components/StyledText";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { defaultSelectedMovie } from "../LotHome/LotHome";

interface MovieDetailsProps {
  route: any;
  navigation: any;
}

const MovieDetails = ({ route, navigation }: MovieDetailsProps) => {
  const { movieData, setSelectedMovie } = route.params;
  const [movie, setMovie] = useState(defaultSelectedMovie);

  useEffect(() => {
    const movie: Movie = movieData;
    setMovie(movie);
  }, []);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e: any) => {
      // Prevent default behavior of leaving the screen (if needed)
      e.preventDefault();
      setSelectedMovie(defaultSelectedMovie);
      navigation.dispatch(e.data.action);
    });
  }, [navigation]);

  return (
    <View style={MovieDetailsStyles.container}>
      <View
        style={{
          ...MovieDetailsStyles.container,
          ...MovieDetailsStyles.contentContainer,
        }}
      >
        <ImageBackground
          source={{ uri: movie.images[0] }}
          style={MovieDetailsStyles.backgroundImage}
          blurRadius={5}
        >
          <View style={{ ...MovieDetailsStyles.row, marginBottom: 10 }}>
            <Text style={MovieDetailsStyles.nameHeader}>{movie.name}</Text>
            <TouchableOpacity
              style={{ ...MovieDetailsStyles.moreButton }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Entypo name="dots-three-horizontal" size={25} color="#34495E" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={MovieDetailsStyles.scrollContainer}
            directionalLockEnabled
          >
            <View
              style={{ justifyContent: "center", alignItems: "flex-start" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {movie.genre.map((item, i) =>
                  i === movie.genre.length - 1 ? (
                    <Text
                      style={{
                        fontSize: 15,
                        textShadowRadius: 3,
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowColor: "black",
                      }}
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 15,
                        textShadowRadius: 3,
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowColor: "black",
                      }}
                    >
                      {item.name},{" "}
                    </Text>
                  )
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textShadowRadius: 3,
                    textShadowOffset: { width: 3, height: 3 },
                    textShadowColor: "black",
                  }}
                >
                  {movie.year}
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontSize: 15,
                    textShadowRadius: 3,
                    textShadowOffset: { width: 3, height: 3 },
                    textShadowColor: "black",
                  }}
                >
                  {movie.rating}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    textShadowRadius: 3,
                    textShadowOffset: { width: 3, height: 3 },
                    textShadowColor: "black",
                  }}
                >
                  {movie.runtime} min
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: 1,
                  alignItems: "center",
                  marginBottom: 10,
                  shadowOpacity: 1,
                  shadowRadius: 1,
                  shadowOffset: { width: 3, height: 3 },
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  textShadowRadius: 3,
                  textShadowOffset: { width: 3, height: 3 },
                  textShadowColor: "black",
                }}
              >
                {movie.plot}
              </Text>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
              style={{
                ...MovieDetailsStyles.deleteButton,
                backgroundColor: "#2ECC71",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 10,
                alignItems: "center",
              }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <AntDesign name="tags" color="white" size={25} />
              <Text
                style={{ fontSize: 18, paddingLeft: 5 }}
                ellipsizeMode="tail"
              >
                how do you own this?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...MovieDetailsStyles.deleteButton,
                backgroundColor: "#5DADE2",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 10,
                alignItems: "center",
              }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <AntDesign name="star" color="white" size={25} />
              <Text
                style={{ fontSize: 18, paddingLeft: 5 }}
                ellipsizeMode="tail"
              >
                rate film
              </Text>
            </TouchableOpacity>
            <View style={{ ...MovieDetailsStyles.row, paddingVertical: 10 }}>
              <TouchableOpacity
                style={MovieDetailsStyles.backButton}
                onPress={() =>
                  navigation.navigate("HomeScreen", {
                    selectedMovie: undefined,
                  })
                }
                activeOpacity={0.5}
              >
                <AntDesign
                  name="back"
                  size={30}
                  style={{ marginBottom: -3 }}
                  color="white"
                />
                <Text
                  style={{
                    fontSize: 25,
                    paddingLeft: 5,
                    textShadowRadius: 3,
                    textShadowOffset: { width: 3, height: 3 },
                    textShadowColor: "black",
                  }}
                  ellipsizeMode="tail"
                >
                  back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...MovieDetailsStyles.deleteButton }}
                onPress={() => {}}
                activeOpacity={0.5}
              >
                <AntDesign name="delete" color="white" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MovieDetails;
