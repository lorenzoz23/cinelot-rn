import React from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from "react-native";
import { TagModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";

const tags = ["blu-ray", "dvd", "digital", "4k uhd"];

interface TagModalProps {
  handleClose: () => void;
  movie: Movie;
}

const TagModal = (props: TagModalProps) => {
  const { handleClose, movie } = props;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <View>
      <NativeModal
        animationType="fade"
        transparent={true}
        visible
        onDismiss={handleClose}
      >
        <BlurView
          intensity={100}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={TagModalStyles.container}>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    ...TagModalStyles.modal,
                    maxHeight: "85%",
                  }}
                >
                  <View style={{ marginVertical: 20, alignItems: "center" }}>
                    <Text
                      style={{
                        ...TagModalStyles.text,
                        ...TagModalStyles.headerText,
                      }}
                    >
                      How do you own {movie.name} ({movie.year})?
                    </Text>
                  </View>
                  <FlatList
                    data={tags}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#1F618D",
                          borderRadius: 30,
                          paddingVertical: 15,
                          paddingHorizontal: 15,
                          marginVertical: 5,
                          marginHorizontal: 20,
                          borderColor: "#CACFD2",
                          borderWidth: 1,
                        }}
                        key={index}
                      >
                        <TouchableWithoutFeedback>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text
                              style={{
                                ...TagModalStyles.text,
                                color: "#85C1E9",
                                textAlign: "center",
                              }}
                            >
                              {item}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {}}
                              activeOpacity={0.5}
                            >
                              <Ionicons
                                name="remove-circle"
                                color="#58D68D"
                                size={30}
                              />
                            </TouchableOpacity>
                          </View>
                        </TouchableWithoutFeedback>
                      </TouchableOpacity>
                    )}
                    numColumns={1}
                    directionalLockEnabled
                    horizontal={false}
                    style={{ marginBottom: 20, width: deviceWidth }}
                  />
                  <TouchableOpacity
                    style={{
                      borderRadius: 50,
                      backgroundColor: "#8E44AD",
                      padding: 15,
                    }}
                    activeOpacity={0.5}
                  >
                    <MaterialCommunityIcons
                      name="tag-plus"
                      color="white"
                      size={50}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: deviceWidth,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
                      <AntDesign name="closecircle" color="#FF18B2" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      activeOpacity={0.5}
                      disabled
                    >
                      <AntDesign name="checkcircle" color="#58D68D" size={40} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </BlurView>
      </NativeModal>
    </View>
  );
};

export default TagModal;
