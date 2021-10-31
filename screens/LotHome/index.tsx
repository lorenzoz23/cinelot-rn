import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { MovieCard } from "../../components/MovieCard";
import { SegControl } from "../../components/SegControl";
import {
  mockLotCollection,
  mockWishlistCollection,
} from "../../mocks/MovieCollection";
import { Movie } from "../../types/Movie";
import { styles } from "./styles";

export const defaultSelectedMovie: Movie = {
  name: "",
  year: "",
  rating: "",
  genre: [{ id: -1, name: "" }],
  runtime: "",
  plot: "",
  poster: "",
  images: [""],
  id: -1,
  imdbId: "",
  userStarRating: -1,
  hasWatched: false,
  mediaTags: [],
};

export const LotHomeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [segState, setSegState] = useState("lot");
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    mockLotCollection as Movie[]
  );
  const [selectedMovie, setSelectedMovie] = useState(defaultSelectedMovie);

  useEffect(() => {
    if (!Boolean(route.params?.selectedMovie))
      setSelectedMovie(defaultSelectedMovie);
  }, [route.params]);

  useEffect(() => {
    const updatedCollection =
      segState === "lot" ? mockLotCollection : mockWishlistCollection;
    setSelectedCollection(updatedCollection);
  }, [segState]);

  useEffect(() => {
    if (!Boolean(selectedMovie.id < 0))
      navigation.navigate("MovieDetailsScreen", {
        movieData: selectedMovie,
        setSelectedMovie: () => setSelectedMovie(defaultSelectedMovie),
      });
  }, [selectedMovie]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.segContainer}>
          <SegControl onChange={setSegState} selected={segState} />
        </View>
        <FlatList
          data={selectedCollection}
          renderItem={({ item }) => (
            <View style={styles.movie} key={item.id}>
              <MovieCard data={item as Movie} showMovie={setSelectedMovie} />
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
          numColumns={4} // add screen size logic here
          directionalLockEnabled
          onRefresh={handleRefresh}
          refreshing={refreshing}
          horizontal={false}
          style={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
};
