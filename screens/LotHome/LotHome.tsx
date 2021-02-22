import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  ScaledSize,
} from "react-native";
import MovieCard from "../../components/MovieCard";
import SegControl from "../../components/SegControl/";
import {
  mockLotCollection,
  mockWishlistCollection,
} from "../../mocks/MovieCollection";
import { Movie } from "../../types/Movie";

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

const lotGradients = ["#3F5EFB", "#4d6bff", "#FC466B"];
const wishlistGradients = ["#00C9FF", "#00C9FF", "#92FE9D"];
const solidGradient = ["black", "black"];

const LotHome = ({ navigation, route }: { navigation: any; route: any }) => {
  const [segState, setSegState] = useState("lot");
  const [phoneWidth, setPhoneWidth] = useState(Dimensions.get("screen").width);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    mockLotCollection
  );
  const [selectedMovie, setSelectedMovie] = useState(defaultSelectedMovie);
  //const flatListRef = useRef();

  const onPhoneWidthChange = ({
    window,
    screen,
  }: {
    window: ScaledSize;
    screen: ScaledSize;
  }) => {
    setPhoneWidth(screen.width);
  };

  useEffect(() => {
    console.log("width", phoneWidth, "height", Dimensions.get("window").height);
    Dimensions.addEventListener("change", onPhoneWidthChange);
  }, []);

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
      navigation.navigate("MovieDetailsScreen", { movieData: selectedMovie });
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
      <LinearGradient
        colors={solidGradient} //{segState === "lot" ? lotGradients : wishlistGradients}
        style={{
          flex: 1,
          width: phoneWidth,
          alignItems: "flex-start",
        }}
      >
        <View style={styles.segContainer}>
          <SegControl onChange={setSegState} selected={segState} />
        </View>
        <FlatList
          //ref={flatListRef} // extract flatlist to own component
          data={selectedCollection}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
                marginBottom: 10,
              }}
              key={item.id}
            >
              <MovieCard data={item as Movie} showMovie={setSelectedMovie} />
            </View>
          )}
          //keyExtractor={(item) => String(item.id)}
          numColumns={4} // add screen size logic here
          directionalLockEnabled
          onRefresh={handleRefresh}
          refreshing={refreshing}
          horizontal={false}
          style={{
            paddingLeft: 10,
            paddingBottom: 10,
            //backgroundColor: "white",
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segContainer: {
    marginHorizontal: 50,
    paddingVertical: 10,
  },
});

export default LotHome;
