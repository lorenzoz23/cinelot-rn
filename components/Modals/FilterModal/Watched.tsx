import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { FilterModalStyles } from "./styles";

const watched = ["Watched", "Not Watched"];

const WatchedFilter = () => {
  const navigator = useNavigation();

  return (
    <View style={FilterModalStyles.container}>
      <View
        style={{
          ...FilterModalStyles.modal,
          ...FilterModalStyles.watchedContainer,
        }}
      >
        <Text
          style={{
            ...FilterModalStyles.text,
            ...FilterModalStyles.headerText,
          }}
        >
          Watched
        </Text>
        <ScrollView style={{ flex: 1 }} directionalLockEnabled horizontal>
          <View style={FilterModalStyles.watchedRow}>
            {watched.map((item, i) => (
              <TouchableOpacity
                style={FilterModalStyles.watchedButton}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={FilterModalStyles.watchedText}>{item}</Text>
                <FontAwesome
                  name={i === 0 ? "eye" : "eye-slash"}
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

export default WatchedFilter;
