import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { FilterModalStyles } from "./styles";

const StarRatingsFilter = () => {
  const navigator = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <View
        style={{
          ...FilterModalStyles.modal,
          paddingBottom: 20,

          height: "40%",
          backgroundColor: "#2E86C1",
        }}
      >
        <Text
          style={{
            ...FilterModalStyles.text,
            ...FilterModalStyles.headerText,
          }}
        >
          Your Rating
        </Text>
        <ScrollView style={{ flex: 1 }} directionalLockEnabled horizontal>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
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
          style={{
            borderRadius: 30,
            backgroundColor: "#2874A6",
            padding: 15,
            margin: 15,
          }}
          activeOpacity={0.5}
        >
          <Ionicons name="play-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StarRatingsFilter;
