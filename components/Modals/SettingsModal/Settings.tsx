import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import MovieCard from "../../MovieCard";
import { MonoText as Text } from "../../StyledText";
import { sharedFilterModalStyles } from "../FilterModal/styles";
import { sharedModalStyles } from "../styles";
import { SettingsModalStyles } from "./styles";
import { mockPrizedPossessions } from "../../../mocks/PrizedPossessions";
import { Movie } from "../../../types/Movie";

const SettingsModal = () => {
  const navigator = useNavigation();

  const handleClose = () => {
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
          <Text style={sharedFilterModalStyles.headerText}>Settings</Text>
          <ScrollView
            style={sharedFilterModalStyles.scrollContainer}
            directionalLockEnabled
            horizontal={false}
          >
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={SettingsModalStyles.listCellContainer}
                onPress={() => navigator.navigate("EditProfile")}
              >
                <Text style={SettingsModalStyles.listCellText}>
                  Edit profile
                </Text>
                <AntDesign name="caretright" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={SettingsModalStyles.listCellContainer}
                onPress={() => navigator.navigate("LoginOptions")}
              >
                <Text style={SettingsModalStyles.listCellText}>
                  Login options
                </Text>
                <AntDesign name="caretright" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={SettingsModalStyles.listCellContainer}
                onPress={() => navigator.navigate("ImportExport")}
              >
                <Text style={SettingsModalStyles.listCellText}>
                  Import/Export data
                </Text>
                <AntDesign name="caretright" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={SettingsModalStyles.listCellContainer}
                onPress={() => navigator.navigate("Preferences")}
              >
                <Text style={SettingsModalStyles.listCellText}>
                  Preferences
                </Text>
                <AntDesign name="caretright" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={SettingsModalStyles.listCellContainer}
                onPress={() => {
                  Alert.alert(
                    "Clear cache",
                    "Clearing cache will remove any saved preferences and local storage accumulated on this account",
                    [
                      {
                        text: "Clear the cache",
                        style: "destructive",
                      },
                      { text: "Nevermind", style: "default" },
                    ]
                  );
                }}
              >
                <Text
                  style={[
                    SettingsModalStyles.listCellText,
                    SettingsModalStyles.clearCacheColor,
                  ]}
                >
                  Clear cache
                </Text>
                <Ionicons
                  name="remove-circle"
                  size={25}
                  color={SettingsModalStyles.clearCacheColor.color}
                />
              </TouchableOpacity>
            </View>
            <View style={SettingsModalStyles.separator} />
            <FlatList
              data={mockPrizedPossessions}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={SettingsModalStyles.prizedPossessionRemoveButton}
                  >
                    <FontAwesome name="close" size={20} color="#34495E" />
                  </TouchableOpacity>
                  <View style={SettingsModalStyles.movie} key={item.id}>
                    <MovieCard data={item as Movie} showMovie={() => {}} />
                  </View>
                </>
              )}
              directionalLockEnabled
              horizontal
              contentContainerStyle={SettingsModalStyles.flatListContainer}
              showsHorizontalScrollIndicator={false}
            />
            <View style={SettingsModalStyles.separator} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={SettingsModalStyles.listCellContainer}
              onPress={() => navigator.navigate("DeleteAccount")}
            >
              <Text
                style={[
                  SettingsModalStyles.listCellText,
                  SettingsModalStyles.deleteColor,
                ]}
              >
                Delete account
              </Text>
              <AntDesign
                name="caretright"
                size={25}
                color={SettingsModalStyles.deleteColor.color}
              />
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
            <AntDesign name="closecircle" color="#FF18B2" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
};

export default SettingsModal;
