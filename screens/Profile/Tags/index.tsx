import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../../components/Text";
import { styles } from "../styles";

export const TagsScreen = () => {
  const { goBack } = useNavigation();

  return (
    <BlurView intensity={100} style={styles.blurContainer}>
      <View style={styles.tagsContainer}>
        <View
          style={{
            ...styles.miniContainer,
            ...styles.parentScreenContainer,
          }}
        >
          <Text style={styles.titleText}>Tags</Text>
          <ScrollView
            style={styles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <TouchableOpacity activeOpacity={0.5} style={{}}>
              <Text style={{}}>Default watch attribute</Text>
              <AntDesign name="caretright" size={25} color="white" />
            </TouchableOpacity>
            <View style={styles.separator} />
          </ScrollView>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity onPress={goBack} activeOpacity={0.5}>
              <AntDesign name="leftcircle" color="white" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BlurView>
  );
};
