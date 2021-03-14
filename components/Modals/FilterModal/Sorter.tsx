import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { FilterModalStyles } from "./styles";

const sorters = [
  "Title (Asc)",
  "Title (Desc)",
  "Runtime (Asc)",
  "Runtime (Desc)",
  "MPAA Rating (Asc)",
  "MPAA Rating (Desc)",
  "Star Count (Asc)",
  "Star Count (Desc)",
  "Year Released (Asc)",
  "Year Released (Desc)",
  "Reset (Original Order)",
];

const Sorter = () => {
  const navigator = useNavigation();

  return (
    <View style={FilterModalStyles.container}>
      <View
        style={{
          ...FilterModalStyles.modal,
          ...FilterModalStyles.sorterContainer,
        }}
      >
        <Text
          style={{
            ...FilterModalStyles.text,
            ...FilterModalStyles.headerText,
          }}
        >
          Sorters
        </Text>
        <View style={FilterModalStyles.sortSwitchWrapper}>
          <Text>Save sorted order</Text>
          <Switch
            value={false}
            style={{ marginLeft: 20 }}
            trackColor={{ false: "#34495E", true: "#48C9B0" }}
            ios_backgroundColor="#34495E"
          />
        </View>
        <ScrollView
          style={FilterModalStyles.sortScrollView}
          directionalLockEnabled
          horizontal={false}
        >
          {sorters.map((sorter, i) => (
            <TouchableOpacity
              style={FilterModalStyles.sortItem}
              key={i}
              activeOpacity={0.5}
            >
              <Text style={FilterModalStyles.sortItemText}>{sorter}</Text>
              <Fontisto
                name={
                  sorter.includes("Reset")
                    ? "checkbox-active"
                    : "checkbox-passive"
                }
                color={sorter.includes("Reset") ? "#58D68D" : "#E5E7E9"}
                size={25}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          style={FilterModalStyles.backButton}
          activeOpacity={0.5}
        >
          <Ionicons name="play-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sorter;
