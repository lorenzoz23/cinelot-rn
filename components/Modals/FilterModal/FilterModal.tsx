import React, { useEffect, useRef } from "react";
import { Animated, TextInput, TouchableOpacity, View } from "react-native";
import { FilterModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
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
        ...FilterModalStyles.container,
        width: Layout.window.width,
        opacity: fadeInAnim,
      }}
    >
      <View
        style={[FilterModalStyles.modal, FilterModalStyles.filtersHomeWrapper]}
      >
        <View style={FilterModalStyles.textInputWrapper}>
          <Text
            style={{
              ...FilterModalStyles.text,
              ...FilterModalStyles.headerText,
            }}
          >
            Filters
          </Text>
          <TextInput
            placeholder="Search your 16 lot films..."
            style={FilterModalStyles.search}
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
        <View style={FilterModalStyles.filtersWrapper}>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("MediaTagsFilter")}
          >
            <View style={FilterModalStyles.row}>
              <Text style={FilterModalStyles.labelText}>Your Media Tags</Text>
              <AntDesign name="tags" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("GenreFilter")}
          >
            <View style={FilterModalStyles.row}>
              <Text style={FilterModalStyles.labelText}>Genre</Text>
              <MaterialCommunityIcons
                name="drama-masks"
                color="white"
                size={25}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("StarRatingsFilter")}
          >
            <View style={FilterModalStyles.row}>
              <Text style={FilterModalStyles.labelText}>Your Ratings</Text>
              <AntDesign name="star" size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("WatchedFilter")}
          >
            <View style={FilterModalStyles.row}>
              <Text style={FilterModalStyles.labelText}>Watched</Text>
              <FontAwesome name="eye" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterModalStyles.sort}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("Sorter")}
          >
            <View style={FilterModalStyles.row}>
              <Text style={FilterModalStyles.labelText}>Sort by...</Text>
              <FontAwesome name="sort" color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={FilterModalStyles.bottomButtonsContainer}>
          <TouchableOpacity
            onPress={handleClose}
            activeOpacity={0.5}
            style={FilterModalStyles.done}
          >
            <AntDesign name="closecircle" color="#FF18B2" size={40} />
            <Text style={{ color: "#FF18B2" }}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.5}
            style={FilterModalStyles.reset}
          >
            <FontAwesome name="refresh" color="#E5E7E9" size={40} />
            <Text style={{ color: "#E5E7E9" }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default FilterModal;
