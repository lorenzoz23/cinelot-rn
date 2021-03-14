import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { FilterModalStyles } from "./styles";

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
    <View style={FilterModalStyles.container}>
      <View
        style={{
          ...FilterModalStyles.modal,
          ...FilterModalStyles.mediaTagsContainer,
        }}
      >
        <Text
          style={{
            ...FilterModalStyles.text,
            ...FilterModalStyles.headerText,
          }}
        >
          Genre
        </Text>
        <ScrollView
          style={FilterModalStyles.sortScrollView}
          directionalLockEnabled
          horizontal
        >
          <View style={FilterModalStyles.watchedRow}>
            {genres.map((genre, i) => (
              <TouchableOpacity
                style={FilterModalStyles.watchedButton}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={FilterModalStyles.watchedText}>{genre}</Text>
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
          style={FilterModalStyles.backButton}
          activeOpacity={0.5}
        >
          <Ionicons name="play-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenreFilter;
