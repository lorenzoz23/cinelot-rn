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
import DeleteModal from "../../components/Modals/DeleteModal";
import MoreModal from "../../components/Modals/MoreModal";
import TagModal from "../../components/Modals/TagModal";

interface MovieDetailsProps {
  route: any;
  navigation: any;
}

const MovieDetails = ({ route, navigation }: MovieDetailsProps) => {
  const { movieData, setSelectedMovie } = route.params;
  const [movie, setMovie] = useState(defaultSelectedMovie);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const [isTagModalVisible, setIsTagModalVisible] = useState(false);

  useEffect(() => {
    const movie: Movie = movieData;
    setMovie(movie);
  }, []);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e: any) => {
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
          <View
            style={[
              MovieDetailsStyles.row,
              MovieDetailsStyles.movieHeaderContent,
            ]}
          >
            <Text
              style={[
                MovieDetailsStyles.nameHeader,
                MovieDetailsStyles.textShadow,
              ]}
            >
              {movie.name}
            </Text>
            <TouchableOpacity
              style={MovieDetailsStyles.moreButton}
              onPress={() => setIsMoreModalVisible(true)}
              activeOpacity={0.5}
            >
              <Entypo name="dots-three-horizontal" size={25} color="#34495E" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={MovieDetailsStyles.scrollContainer}
            directionalLockEnabled
          >
            <View style={MovieDetailsStyles.scrollableContentWrapper}>
              <View style={MovieDetailsStyles.movieDetailsWrapper}>
                {movie.genre.map((item, i) =>
                  i === movie.genre.length - 1 ? (
                    <Text
                      style={[
                        MovieDetailsStyles.movieDetailsText,
                        MovieDetailsStyles.textShadow,
                      ]}
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={[
                        MovieDetailsStyles.movieDetailsText,
                        MovieDetailsStyles.textShadow,
                      ]}
                    >
                      {item.name},{" "}
                    </Text>
                  )
                )}
              </View>
              <View style={MovieDetailsStyles.movieDetailsTextContainer}>
                <Text
                  style={[
                    MovieDetailsStyles.movieDetailsText,
                    MovieDetailsStyles.textShadow,
                  ]}
                >
                  {movie.year}
                </Text>
                <Text
                  style={[
                    MovieDetailsStyles.movieDetailsText,
                    MovieDetailsStyles.textShadow,
                    MovieDetailsStyles.middleDetail,
                  ]}
                >
                  {movie.rating}
                </Text>
                <Text
                  style={[
                    MovieDetailsStyles.movieDetailsText,
                    MovieDetailsStyles.textShadow,
                  ]}
                >
                  {movie.runtime} min
                </Text>
              </View>
              <View style={MovieDetailsStyles.separator} />
              <Text
                style={[
                  MovieDetailsStyles.movieDetailsText,
                  MovieDetailsStyles.textShadow,
                  MovieDetailsStyles.plot,
                ]}
              >
                {movie.plot}
              </Text>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
              style={MovieDetailsStyles.tagButton}
              onPress={() => setIsTagModalVisible(true)}
              activeOpacity={0.5}
            >
              <AntDesign name="tags" color="#283747" size={25} />
              <Text
                style={MovieDetailsStyles.tagButtonText}
                ellipsizeMode="tail"
              >
                How do you own this?
              </Text>
            </TouchableOpacity>
            <View
              style={{
                ...MovieDetailsStyles.row,
                ...MovieDetailsStyles.bottomButtonContainer,
              }}
            >
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
                  style={[
                    MovieDetailsStyles.backButtonText,
                    MovieDetailsStyles.textShadow,
                  ]}
                  ellipsizeMode="tail"
                >
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={MovieDetailsStyles.deleteButton}
                onPress={() => setIsDeleteModalVisible(true)}
                activeOpacity={0.5}
              >
                <AntDesign name="delete" color="white" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {isDeleteModalVisible && (
        <DeleteModal
          movie={movie}
          isLot={true}
          handleClose={() => setIsDeleteModalVisible(false)}
        />
      )}
      {isMoreModalVisible && (
        <MoreModal
          handleClose={() => setIsMoreModalVisible(false)}
          movie={movie}
        />
      )}
      {isTagModalVisible && (
        <TagModal
          handleClose={() => setIsTagModalVisible(false)}
          movie={movie}
        />
      )}
    </View>
  );
};

export default MovieDetails;
