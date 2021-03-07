import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import SegControl from "../../components/SegControl/";
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
  genre: [""],
  runtime: "",
  plot: "",
  poster: "",
  images: [""],
  id: -1,
  imdbId: "",
  starRating: -1,
  watched: false,
  mediaTags: [],
};

//const lotGradients = ["#3F5EFB", "#4d6bff", "#FC466B"];
//const wishlistGradients = ["#00C9FF", "#00C9FF", "#92FE9D"];
const solidGradient = ["black", "black"];

const LotHome = ({ navigation, route }: { navigation: any; route: any }) => {
  const [segState, setSegState] = useState("lot");
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    mockLotCollection
  );
  const [selectedMovie, setSelectedMovie] = useState(defaultSelectedMovie);
  //const flatListRef = useRef();

  useEffect(() => {
    if (!route.params?.selectedMovie) setSelectedMovie(defaultSelectedMovie);
  }, [route.params]);

  useEffect(() => {
    let updatedCollection = [...selectedCollection];
    updatedCollection =
      segState === "lot" ? mockLotCollection : mockWishlistCollection;
    setSelectedCollection(updatedCollection);
  }, [segState]);

  useEffect(() => {
    if (selectedMovie.id > 0)
      navigation.navigate("MovieDetailsScreen", {
        movieData: selectedMovie,
        setSelectedMovie: () => setSelectedMovie(defaultSelectedMovie),
      });
  }, [selectedMovie]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  // const scrollToTop = () => {
  //   flatListRef.current.scrollToOffset({animated: true, offset: 0})
  // }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={solidGradient} style={styles.gradientContainer}>
        <View style={styles.segContainer}>
          <SegControl onChange={setSegState} selected={segState} />
        </View>
        <FlatList
          //ref={flatListRef} // extract flatlist to own component
          data={selectedCollection}
          renderItem={({ item }) => (
            <View style={styles.movie} key={item.id}>
              <MovieCard data={item as Movie} showMovie={setSelectedMovie} />
            </View>
          )}
          //keyExtractor={(item) => String(item.id)}
          numColumns={4} // add screen size logic here
          directionalLockEnabled
          onRefresh={handleRefresh}
          refreshing={refreshing}
          horizontal={false}
          style={styles.flatListContainer}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LotHome;
