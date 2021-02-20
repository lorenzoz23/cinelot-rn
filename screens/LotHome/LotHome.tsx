import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import { mockLotCollection } from "../../mocks/MovieCollection";
import { Movie } from "../../types/Movie";

const LotHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%", paddingVertical: 10 }}>
        {mockLotCollection.map(
          (x, i) =>
            i % 3 === 0 && (
              <View
                style={{
                  marginHorizontal: 10,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                {mockLotCollection.map(
                  (movie, j) =>
                    j < 4 && (
                      <View style={{ marginRight: 10 }}>
                        <MovieCard key={j} data={movie as Movie} />
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
  },
});

export default LotHome;
