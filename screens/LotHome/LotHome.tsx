import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MovieCard from "../../components/MovieCard";
import { Feather } from "@expo/vector-icons";

const LotHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingTop: 5,
          paddingHorizontal: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          editable
          placeholder="Search your lot..."
          placeholderTextColor="#BDC3C7"
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Feather name="filter" size={24} color="white" />
        </View>
      </View>
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
