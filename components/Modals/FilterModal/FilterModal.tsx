import React, { useEffect, useRef } from "react";
import { Animated, TextInput, TouchableOpacity, View } from "react-native";
import { sharedFilterModalStyles } from "./styles";
import { MonoText as Text } from "../../Text";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../constants/Layout";

const FilterModal = () => {
  const navigator = useNavigation();
  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const handleClose = () => {
    navigator.navigate("HomeScreen");
  };

  return (
    <Animated.View
      style={{
        ...sharedFilterModalStyles.container,
        width: Layout.window.width,
        opacity: fadeInAnim,
      }}
    >
      <View
        style={[
          sharedFilterModalStyles.modal,
          sharedFilterModalStyles.filtersHomeWrapper,
        ]}
      >
        <View style={sharedFilterModalStyles.textInputWrapper}>
          <Text style={sharedFilterModalStyles.headerText}>Filters</Text>
          <TextInput
            placeholder="Search your 16 lot films..."
            style={sharedFilterModalStyles.search}
            placeholderTextColor="#AEB6BF"
            keyboardAppearance="dark"
            onChangeText={() => {}}
            multiline={false}
            editable
            autoCapitalize="none"
            clearButtonMode="while-editing"
            returnKeyType="done" //switch to search if there's input
            returnKeyLabel="done"
          />
        </View>
        <View style={sharedFilterModalStyles.filtersWrapper}>
          <TouchableOpacity
            style={{
              ...sharedFilterModalStyles.homeRow,
              ...sharedFilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("MediaTagsFilter")}
          >
            <View style={sharedFilterModalStyles.iconTextRow}>
              <Text style={sharedFilterModalStyles.labelText}>
                Your Media Tags
              </Text>
              <AntDesign name="tags" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...sharedFilterModalStyles.homeRow,
              ...sharedFilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("GenreFilter")}
          >
            <View style={sharedFilterModalStyles.iconTextRow}>
              <Text style={sharedFilterModalStyles.labelText}>Genre</Text>
              <MaterialCommunityIcons
                name="drama-masks"
                color="white"
                size={25}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...sharedFilterModalStyles.homeRow,
              ...sharedFilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("StarRatingsFilter")}
          >
            <View style={sharedFilterModalStyles.iconTextRow}>
              <Text style={sharedFilterModalStyles.labelText}>
                Your Ratings
              </Text>
              <AntDesign name="star" size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...sharedFilterModalStyles.homeRow,
              ...sharedFilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("WatchedFilter")}
          >
            <View style={sharedFilterModalStyles.iconTextRow}>
              <Text style={sharedFilterModalStyles.labelText}>Watched</Text>
              <FontAwesome name="eye" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...sharedFilterModalStyles.homeRow,
              ...sharedFilterModalStyles.sort,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("Sorter")}
          >
            <View style={sharedFilterModalStyles.iconTextRow}>
              <Text style={sharedFilterModalStyles.labelText}>Sort by...</Text>
              <FontAwesome name="sort" color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={sharedFilterModalStyles.bottomButtonsContainer}>
          <TouchableOpacity
            onPress={handleClose}
            activeOpacity={0.5}
            style={sharedFilterModalStyles.done}
          >
            <AntDesign name="closecircle" color="#FF18B2" size={40} />
            <Text style={sharedFilterModalStyles.doneText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.5}
            style={sharedFilterModalStyles.reset}
          >
            <FontAwesome name="refresh" color="#E5E7E9" size={40} />
            <Text style={sharedFilterModalStyles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default FilterModal;
