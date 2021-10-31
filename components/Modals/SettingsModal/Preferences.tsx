import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const Preferences = () => {
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
          <Text style={sharedFilterModalStyles.headerText}>Preferences</Text>
          <ScrollView
            style={sharedFilterModalStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={SettingsModalStyles.listCellContainer}
            >
              <Text style={SettingsModalStyles.listCellText}>
                Default watch attribute
              </Text>
              <AntDesign name="caretright" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={SettingsModalStyles.listCellContainer}
            >
              <Text style={SettingsModalStyles.listCellText}>
                Default tag(s)
              </Text>
              <AntDesign name="caretright" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={SettingsModalStyles.listCellContainer}
            >
              <Text style={SettingsModalStyles.listCellText}>
                Manage notifications
              </Text>
              <AntDesign name="caretright" size={25} color="white" />
            </TouchableOpacity>
            <View style={SettingsModalStyles.separator} />
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

export default Preferences;
