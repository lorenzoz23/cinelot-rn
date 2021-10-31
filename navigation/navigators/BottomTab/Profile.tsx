import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { NavBar } from "../../../components/NavBar";
import { ProfileParamList } from "../../../types/ParamLists";
import { AntDesign } from "@expo/vector-icons";
import { ProfileScreen } from "../../../screens/Profile";

const ProfileStack = createStackNavigator<ProfileParamList>();
export const ProfileNavigator = () => {
  const handleGoToSettings = useCallback(
    ({ navigation }: { navigation: any }) =>
      () =>
        navigation.navigate("SettingsHome"),
    []
  );

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={(optionProps) => ({
          headerTitle: () => (
            <NavBar
              title="lorenzoz"
              rightElement={
                <TouchableOpacity
                  onPress={handleGoToSettings(optionProps)}
                  activeOpacity={0.5}
                >
                  <AntDesign name="setting" color="white" size={30} />
                </TouchableOpacity>
              }
              {...optionProps}
            />
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
};
