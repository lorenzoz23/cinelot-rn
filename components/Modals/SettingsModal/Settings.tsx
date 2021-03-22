import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const SettingsModal = () => {
  const navigator = useNavigation();

  const handleClose = () => {
    navigator.goBack();
  };

  return (
    <View style={sharedFilterModalStyles.container}>
      <View
        style={{
          ...sharedFilterModalStyles.modal,
          ...SettingsModalStyles.container,
        }}
      >
        <Text style={sharedFilterModalStyles.headerText}>Settings</Text>
        <ScrollView
          style={sharedFilterModalStyles.scrollContainer}
          directionalLockEnabled
          horizontal={false}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>Theme picker</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>
              Import/Export data
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>
              Manage sign-in methods
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>Clear cache</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={SettingsModalStyles.headerText}>Delete account</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={sharedModalStyles.bottomButtonContainer}>
          <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
            <AntDesign name="closecircle" color="#FF18B2" size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.5} disabled>
            <AntDesign
              name="checkcircle"
              color="#58D68D"
              size={40}
              style={{ opacity: 0.4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsModal;
