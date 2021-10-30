import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import { MonoText as Text } from "../../StyledText";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const ImportExport = () => {
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
          <Text style={sharedFilterModalStyles.headerText}>
            Import/Export data
          </Text>
          <ScrollView
            style={sharedFilterModalStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <View style={SettingsModalStyles.importExportContainer}>
              <TouchableOpacity
                style={SettingsModalStyles.importButton}
                activeOpacity={0.5}
              >
                <Text
                  style={[
                    SettingsModalStyles.listCellText,
                    { paddingRight: 10 },
                  ]}
                >
                  Import
                </Text>
                <FontAwesome5 name="file-import" size={30} color="white" />
              </TouchableOpacity>
              <View style={SettingsModalStyles.separator} />
              <TouchableOpacity
                style={SettingsModalStyles.exportButton}
                activeOpacity={0.5}
                onPress={() => {
                  Alert.alert(
                    "Export your film data",
                    "Pressing continue will export a single CSV file encompassing all films in both your lot and wishlist",
                    [
                      {
                        text: "Continue",
                        style: "default",
                      },
                      { text: "Nevermind", style: "cancel" },
                    ]
                  );
                }}
              >
                <Text
                  style={[
                    SettingsModalStyles.listCellText,
                    { paddingRight: 10 },
                  ]}
                >
                  Export
                </Text>
                <AntDesign name="download" color="white" size={30} />
              </TouchableOpacity>
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

export default ImportExport;
