import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles, StarRatingsStyles } from "./styles";

const StarRatingsFilter = () => {
  const navigator = useNavigation();

  return (
    <View style={sharedFilterModalStyles.container}>
      <View
        style={{
          ...sharedFilterModalStyles.modal,
          ...sharedFilterModalStyles.contentContainer,
        }}
      >
        <Text style={sharedFilterModalStyles.headerText}>Your Rating</Text>
        <ScrollView
          style={sharedFilterModalStyles.flex}
          directionalLockEnabled
          horizontal
        >
          <View style={StarRatingsStyles.starRowWrapper}>
            {Array(5)
              .fill(0)
              .map((index, i) => (
                <TouchableOpacity key={i} activeOpacity={0.5}>
                  <AntDesign
                    name="star"
                    size={50}
                    color="white"
                    style={{ padding: 5 }}
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

export default StarRatingsFilter;
