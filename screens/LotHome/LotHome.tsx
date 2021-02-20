import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import SegControl from "../../components/SegControl";
import {
  mockLotCollection,
  mockWishlistCollection,
} from "../../mocks/MovieCollection";
import { Movie } from "../../types/Movie";

const LotHome = () => {
  const [segState, setSegState] = useState("lot");
  const selectedCollection =
    segState === "lot" ? mockLotCollection : mockWishlistCollection;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.segContainer}>
        <SegControl onChange={setSegState} selected={segState} />
      </View>
      <ScrollView style={{ width: "100%" }}>
        {selectedCollection.map(
          (x, i) =>
            i % 2 === 0 && (
              <View
                style={{
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                {selectedCollection.map(
                  (movie, j) =>
                    j < 4 && (
                      <View style={{ marginRight: 10 }} key={j}>
                        <MovieCard data={movie as Movie} />
                      </View>
                    )
                )}
              </View>
            )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  segContainer: {
    marginHorizontal: 50,
    paddingVertical: 10,
  },
});

export default LotHome;
