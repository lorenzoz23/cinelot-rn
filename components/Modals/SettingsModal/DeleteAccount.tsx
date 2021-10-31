import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const DeleteAccount = () => {
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
            justifyContent: "space-between",
          }}
        >
          <Text style={sharedFilterModalStyles.headerText}>Danger zone!</Text>
          <View style={SettingsModalStyles.deleteAccountContainer}>
            <Text style={SettingsModalStyles.deleteAccountTextHeader}>
              Please type in your auto-generated user-id to confirm account
              deletion
            </Text>
            <Text style={SettingsModalStyles.centeredText}>User ID:</Text>
            <Text style={SettingsModalStyles.centeredText}>
              67atsdfgsdr6hjjk09kjfldasdjh7
            </Text>
            <TextInput
              style={SettingsModalStyles.textInput}
              placeholder="User ID"
              clearButtonMode="while-editing"
              returnKeyType="done"
            />
            <TouchableOpacity
              style={SettingsModalStyles.deleteButton}
              onPress={() => {
                Alert.alert(
                  "One last sanity check",
                  "Are you absolutely positive you want to delete your account?",
                  [
                    {
                      text: "Yes, I'm sure",
                      style: "destructive",
                    },
                    { text: "Nevermind", style: "cancel" },
                  ]
                );
              }}
            >
              <Text style={SettingsModalStyles.listCellText}>
                Delete account
              </Text>
            </TouchableOpacity>
          </View>
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

export default DeleteAccount;
