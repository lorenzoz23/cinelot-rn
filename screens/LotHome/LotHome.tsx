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

const emptyCollection = [
  {
    name: "",
    year: "",
    rating: "",
    genre: [
      {
        id: -1,
        name: "",
      },
      {
        id: -1,
        name: "",
      },
      {
        id: -1,
        name: "",
      },
    ],
    runtime: "",
    plot: "",
    poster: "",
    images: [],
    id: -1,
    imdbId: "",
    starRating: -1,
    watched: false,
    mediaTags: [{ name: "" }],
  },
];

const LotHome = () => {
  const [segState, setSegState] = useState("lot");
  const [phoneWidth, setPhoneWidth] = useState(Dimensions.get("screen").width);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    mockLotCollection
  );
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
    let updatedCollection = [...selectedCollection];
    updatedCollection =
      segState === "lot" ? mockLotCollection : mockWishlistCollection;
    setSelectedCollection(updatedCollection);
  }, [segState]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  // const scrollToTop = () => {
  //   flatListRef.current.scrollToOffset({animated: true, offset: 0})
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.segContainer}>
        <SegControl onChange={setSegState} selected={segState} />
      </View>
      <FlatList
        //ref={flatListRef} // extract flatlist to own component
        data={selectedCollection}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10, marginBottom: 10 }} key={item.id}>
            <MovieCard data={item as Movie} />
          </View>
        )}
        //keyExtractor={(item) => String(item.id)}
        numColumns={4} // add screen size logic here
        directionalLockEnabled
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
  },
  segContainer: {
    marginHorizontal: 50,
    paddingVertical: 10,
  },
});

export default LotHome;
