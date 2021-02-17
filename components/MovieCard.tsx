import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "./Themed";
import { MonoText as Text } from "../components/StyledText";

const MovieCard = () => {
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
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/41Eb7WxmYNL._AC_.jpg",
          }}
          style={{
            width: 90,
            height: 140,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            width: "100%",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#2E4053",
              borderRadius: 10,
              padding: 5,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#5DADE2",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Her (2013)
            </Text>
          </View>
        </View>
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
