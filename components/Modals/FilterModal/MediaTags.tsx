import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "./styles";

const mediaTags = ["blu-ray", "dvd", "digital", "4k-uhd"];

const MediaTagsFilter = () => {
  const navigator = useNavigation();

  return (
    <View style={sharedFilterModalStyles.container}>
      <View
        style={{
          ...sharedFilterModalStyles.modal,
          ...sharedFilterModalStyles.contentContainer,
        }}
      >
        <Text style={sharedFilterModalStyles.headerText}>Your Media Tags</Text>
        <ScrollView
          style={sharedFilterModalStyles.scrollContainer}
          directionalLockEnabled
          horizontal
        >
          <View style={sharedFilterModalStyles.rowItem}>
            {mediaTags.map((mediaTag, i) => (
              <TouchableOpacity
                style={sharedFilterModalStyles.tagButton}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={sharedFilterModalStyles.itemText}>{mediaTag}</Text>
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
          style={sharedFilterModalStyles.backButton}
          activeOpacity={0.5}
        >
          <Ionicons name="play-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaTagsFilter;
