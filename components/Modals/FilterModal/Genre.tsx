import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "./styles";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const GenreFilter = () => {
  const navigator = useNavigation();

  return (
    <View style={sharedFilterModalStyles.container}>
      <View
        style={{
          ...sharedFilterModalStyles.modal,
          ...sharedFilterModalStyles.contentContainer,
        }}
      >
        <Text style={sharedFilterModalStyles.headerText}>Genre</Text>
        <ScrollView
          style={sharedFilterModalStyles.scrollContainer}
          directionalLockEnabled
          horizontal
        >
          <View style={sharedFilterModalStyles.rowItem}>
            {genres.map((genre, i) => (
              <TouchableOpacity
                style={sharedFilterModalStyles.tagButton}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={sharedFilterModalStyles.itemText}>{genre}</Text>
                <MaterialCommunityIcons
                  name="drama-masks"
                  color="white"
                  size={25}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigator.dispatch(StackActions.pop(1))}
          style={sharedFilterModalStyles.backButton}
          activeOpacity={0.5}
        >
          <Ionicons name="play-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenreFilter;
