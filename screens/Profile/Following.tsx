import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../components/StyledText";
import { ProfileStyles } from "./styles";

export const FollowingScreen = () => {
  const navigator = useNavigation();

  const handleBack = () => {
    navigator.goBack();
  };

  return (
    <BlurView intensity={100} style={ProfileStyles.blurContainer}>
      <View style={ProfileStyles.tagsContainer}>
        <View
          style={{
            ...ProfileStyles.miniContainer,
            ...ProfileStyles.parentScreenContainer,
          }}
        >
          <Text style={ProfileStyles.titleText}>Following</Text>
          <ScrollView
            style={ProfileStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <TouchableOpacity activeOpacity={0.5} style={{}}>
              <Text style={{}}>Default watch attribute</Text>
              <AntDesign name="caretright" size={25} color="white" />
            </TouchableOpacity>
            <View style={ProfileStyles.separator} />
          </ScrollView>
          <View style={ProfileStyles.bottomButtonContainer}>
            <TouchableOpacity onPress={handleBack} activeOpacity={0.5}>
              <AntDesign name="leftcircle" color="white" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BlurView>
  );
};
