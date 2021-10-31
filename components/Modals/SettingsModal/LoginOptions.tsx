import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const LoginOptions = () => {
  const navigator = useNavigation();

  const handleBack = () => {
    navigator.goBack();
  };

  const handleClose = () => {
    navigator.navigate("Settings");
    navigator.goBack();
  };

  return (
    <BlurView intensity={100} style={sharedModalStyles.blurContainer}>
      <View style={sharedFilterModalStyles.container}>
        <View
          style={{
            ...SettingsModalStyles.modal,
            ...SettingsModalStyles.container,
          }}
        >
          <Text style={sharedFilterModalStyles.headerText}>Login options</Text>
          <ScrollView
            style={sharedFilterModalStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <View style={SettingsModalStyles.secondaryListCellItem}>
              <View style={SettingsModalStyles.switchLabelContainer}>
                <Text
                  style={[SettingsModalStyles.listCellText, { marginRight: 5 }]}
                >
                  Email/Password
                </Text>
                <MaterialIcons name="email" size={30} color="#0F9D58" />
              </View>
              <Switch
                value={true}
                trackColor={{ false: "#34495E", true: "#48C9B0" }}
                ios_backgroundColor="#34495E"
              />
            </View>
            <View style={SettingsModalStyles.secondaryListCellItem}>
              <View style={SettingsModalStyles.switchLabelContainer}>
                <Text
                  style={[SettingsModalStyles.listCellText, { marginRight: 5 }]}
                >
                  Facebook
                </Text>
                <FontAwesome5 name="facebook" size={30} color="#4267B2" />
              </View>
              <Switch
                trackColor={{ false: "#34495E", true: "#48C9B0" }}
                ios_backgroundColor="#34495E"
              />
            </View>
            <View style={SettingsModalStyles.secondaryListCellItem}>
              <View style={SettingsModalStyles.switchLabelContainer}>
                <Text
                  style={[SettingsModalStyles.listCellText, { marginRight: 5 }]}
                >
                  Google
                </Text>
                <AntDesign name="google" size={30} color="#DB4437" />
              </View>
              <Switch
                trackColor={{ false: "#34495E", true: "#48C9B0" }}
                ios_backgroundColor="#34495E"
              />
            </View>
          </ScrollView>
          <View style={sharedFilterModalStyles.bottomButtonsContainer}>
            <TouchableOpacity onPress={handleBack} activeOpacity={0.5}>
              <AntDesign name="leftcircle" color="white" size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
              <AntDesign name="closecircle" color="#FF18B2" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BlurView>
  );
};

export default LoginOptions;
