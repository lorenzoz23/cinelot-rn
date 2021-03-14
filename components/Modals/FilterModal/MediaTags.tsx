import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { FilterModalStyles } from "./styles";

const mediaTags = ["blu-ray", "dvd", "digital", "4k-uhd"];

const MediaTagsFilter = () => {
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
          Your Media Tags
        </Text>
        <ScrollView
          style={FilterModalStyles.sortScrollView}
          directionalLockEnabled
          horizontal
        >
          <View style={FilterModalStyles.watchedRow}>
            {mediaTags.map((mediaTag, i) => (
              <TouchableOpacity
                style={FilterModalStyles.watchedButton}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={FilterModalStyles.watchedText}>{mediaTag}</Text>
                <AntDesign
                  name="tago"
                  color={"#E5E7E9"}
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

export default MediaTagsFilter;
