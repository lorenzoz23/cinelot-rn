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
          Watched
        </Text>
        <ScrollView style={{ flex: 1 }} directionalLockEnabled horizontal>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {watched.map((item, i) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  margin: 5,
                  backgroundColor: "#212F3C",
                  borderRadius: 30,
                  borderColor: "#E5E7E9",
                  borderWidth: 1,
                }}
                key={i}
                activeOpacity={0.5}
              >
                <Text style={{ fontSize: 15, textAlign: "left" }}>{item}</Text>
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

export default WatchedFilter;
