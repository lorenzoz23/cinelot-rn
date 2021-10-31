import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Avatar } from "../../Avatar";
import { MonoText as Text } from "../../Text";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";

const EditProfile = () => {
  const navigator = useNavigation();

  const handleBack = () => {
    navigator.goBack();
  };

  const handleClose = () => {
    navigator.navigate("SettingsHome");
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
          <Text style={sharedFilterModalStyles.headerText}>Edit profile</Text>
          <ScrollView
            style={sharedFilterModalStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={SettingsModalStyles.avatar}
            >
              <Avatar
                size="large"
                image="https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/18960007Final_ulj6bd/sweater-giu-giu.jpg"
              />
              <Text style={SettingsModalStyles.avatarText}>Edit avatar</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Username"
              style={SettingsModalStyles.textInput}
              clearButtonMode="while-editing"
              returnKeyType="done"
              value="lorenzoz"
            />
            <TextInput
              placeholder="Password"
              style={SettingsModalStyles.textInput}
              returnKeyType="done"
              clearButtonMode="while-editing"
              value="password"
              secureTextEntry
            />
            <TextInput
              placeholder="Email"
              style={SettingsModalStyles.textInput}
              keyboardType="email-address"
              returnKeyType="done"
              clearButtonMode="while-editing"
              value="lzep23@gmail.com"
            />
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

export default EditProfile;
