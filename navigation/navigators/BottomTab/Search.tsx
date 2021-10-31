import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "../../../components/NavBar";
import { SearchScreen } from "../../../screens/Search";
import { SearchParamList } from "../../../types/ParamLists";

const SearchStack = createStackNavigator<SearchParamList>();
export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={(optionProps) => ({
          headerTitle: () => <NavBar title="Search" {...optionProps} />,
        })}
      />
    </SearchStack.Navigator>
  );
};
