import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert, TouchableOpacity } from "react-native";
import NavBar from "../../../components/NavBar";
import HomeScreen from "../../../screens/LotHome/LotHome";
import { HomeParamList } from "../../../types/ParamLists";
import { MonoText as Text } from "../../../components/StyledText";
import { MaterialIcons } from "@expo/vector-icons";

const HomeStack = createStackNavigator<HomeParamList>();
export const HomeNavigator = () => {
  const handleGoToFilters = useCallback(
    ({ navigation }: { navigation: any }) =>
      () =>
        navigation.navigate("FilterHome"),
    []
  );

  const leftElement = useCallback(
    () => (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          Alert.alert(
            "You have 16 films in your collection!",
            "",
            [
              {
                text: "Sick!",
              },
            ],
            { cancelable: false }
          )
        }
      >
        <Text style={{ color: "white", fontSize: 15 }} ellipsizeMode="tail">
          7 films
        </Text>
      </TouchableOpacity>
    ),
    []
  );

  const rightElement = useCallback(
    ({ navigation }: { navigation: any }) => (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleGoToFilters(navigation)}
      >
        <MaterialIcons name="filter-list" color="white" size={30} />
      </TouchableOpacity>
    ),
    []
  );

  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        options={(optionProps) => ({
          headerTitle: () => (
            <NavBar
              title="Cinelot"
              rightElement={rightElement(optionProps.navigation)}
              leftElement={leftElement()}
              {...optionProps}
            />
          ),
        })}
      >
        {(props) => <HomeScreen {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
