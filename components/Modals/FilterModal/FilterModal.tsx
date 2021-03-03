import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FilterModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FilterModal = () => {
  const navigator = useNavigation();
  const phoneWidth = Dimensions.get("window").width;
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  //const [fadeBgColor, setFadeBgColor] = useState(new Animated.Value(0));

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
        width: phoneWidth,
        opacity: fadeInAnim,
      }}
    >
      <View
        style={{ ...FilterModalStyles.modal, justifyContent: "space-between" }}
      >
        <View style={{ width: "100%" }}>
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
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
          >
            <View style={FilterModalStyles.row}>
              <Text
                style={{
                  ...FilterModalStyles.text,
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                Your Media Tags
              </Text>
              <AntDesign name="tags" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
          >
            <View style={FilterModalStyles.row}>
              <Text
                style={{
                  ...FilterModalStyles.text,
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                Genre
              </Text>
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
          >
            <View style={FilterModalStyles.row}>
              <Text
                style={{
                  ...FilterModalStyles.text,
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                Your Ratings
              </Text>
              <AntDesign name="star" size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...FilterModalStyles.sort,
              ...FilterModalStyles.filter,
            }}
            activeOpacity={0.5}
          >
            <View style={FilterModalStyles.row}>
              <Text
                style={{
                  ...FilterModalStyles.text,
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                Watched
              </Text>
              <FontAwesome name="eye" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterModalStyles.sort}
            activeOpacity={0.5}
            onPress={() => navigator.navigate("Sorter")}
          >
            <View style={FilterModalStyles.row}>
              <Text
                style={{
                  ...FilterModalStyles.text,
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                Sort by...
              </Text>
              <FontAwesome name="sort" color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
            margin: 10,
          }}
        >
          <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
            <AntDesign name="closecircle" color="#FF18B2" size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
            <FontAwesome name="refresh" color="#E5E7E9" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default FilterModal;
