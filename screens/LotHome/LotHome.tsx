import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import MovieCard from "../../components/MovieCard";

const LotHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%", paddingVertical: 10 }}>
        {[...Array(20)].map(
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
                {[...Array(4)].map((y, j) => (
                  <View style={{ marginRight: 10 }}>
                    <MovieCard key={j} />
                  </View>
                ))}
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
});

export default LotHome;
