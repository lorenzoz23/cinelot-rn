import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "./Themed";
import { MonoText as Text } from "../components/StyledText";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  data: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const { data } = props;
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity>
        <Image
          source={{
            uri: data.poster,
          }}
          style={{
            width: 90,
            height: 140,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

export default MovieCard;
