import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Movie } from "../../types/Movie";
import { styles } from "./styles";
import { MonoText as Text } from "../../components/Text";
import { defaultSelectedMovie } from "../LotHome";
import DeleteModal from "../../components/Modals/DeleteModal";
import MoreModal from "../../components/Modals/MoreModal";
import TagModal from "../../components/Modals/TagModal";

interface MovieDetailsProps {
  route: any;
  navigation: any;
}

export const MovieDetailsScreen = ({
  route,
  navigation,
}: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie>(null!);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const [isTagModalVisible, setIsTagModalVisible] = useState(false);

  useEffect(() => {
    const { movieData } = route.params;
    const movie: Movie = movieData;
    setMovie(movie);
  }, []);

  useEffect(() => {
    const { setSelectedMovie } = route.params;
    navigation.addListener("beforeRemove", (e: any) => {
      e.preventDefault();
      setSelectedMovie(defaultSelectedMovie);
      navigation.dispatch(e.data.action);
    });
  }, [route.params, navigation]);

  if (!Boolean(movie)) return null;

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.contentContainer]}>
        <ImageBackground
          source={{ uri: movie.images[0] }}
          style={styles.backgroundImage}
          blurRadius={5}
        >
          <View style={[styles.row, styles.movieHeaderContent]}>
            <Text style={[styles.nameHeader, styles.textShadow]}>
              {movie.name}
            </Text>
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() => setIsMoreModalVisible(true)}
              activeOpacity={0.5}
            >
              <Entypo name="dots-three-horizontal" size={25} color="#34495E" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollContainer} directionalLockEnabled>
            <View style={styles.scrollableContentWrapper}>
              <View style={styles.movieDetailsWrapper}>
                {movie.genre.map((item, i) =>
                  i === movie.genre.length - 1 ? (
                    <Text
                      key={item.id}
                      style={[styles.movieDetailsText, styles.textShadow]}
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      key={item.id}
                      style={[styles.movieDetailsText, styles.textShadow]}
                    >
                      {item.name},{" "}
                    </Text>
                  )
                )}
              </View>
              <View style={styles.movieDetailsTextContainer}>
                <Text style={[styles.movieDetailsText, styles.textShadow]}>
                  {movie.year}
                </Text>
                <Text
                  style={[
                    styles.movieDetailsText,
                    styles.textShadow,
                    styles.middleDetail,
                  ]}
                >
                  {movie.rating}
                </Text>
                <Text style={[styles.movieDetailsText, styles.textShadow]}>
                  {movie.runtime} min
                </Text>
              </View>
              <View style={styles.separator} />
              <Text
                style={[
                  styles.movieDetailsText,
                  styles.textShadow,
                  styles.plot,
                ]}
              >
                {movie.plot}
              </Text>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
              style={styles.tagButton}
              onPress={() => setIsTagModalVisible(true)}
              activeOpacity={0.5}
            >
              <AntDesign name="tags" color="#283747" size={25} />
              <Text style={styles.tagButtonText} ellipsizeMode="tail">
                How do you own this?
              </Text>
            </TouchableOpacity>
            <View style={[styles.row, styles.bottomButtonContainer]}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() =>
                  navigation.navigate("HomeScreen", {
                    selectedMovie: undefined,
                  })
                }
                activeOpacity={0.5}
              >
                <AntDesign name="back" size={30} color="white" />
                <Text
                  style={[styles.backButtonText, styles.textShadow]}
                  ellipsizeMode="tail"
                >
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
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
          isLot={true}
          handleClose={() => setIsDeleteModalVisible(false)}
          movie={movie}
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
