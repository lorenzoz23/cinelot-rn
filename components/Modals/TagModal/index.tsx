import React, { useState } from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import { TagModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";

const tags = [
  {
    name: "blu-ray",
    owned: true,
    types: ["standard", "20th anniversary edition", "collector's edition"],
  },
  { name: "dvd", owned: true },
  { name: "digital", owned: true },
  { name: "4k-uhd", owned: false },
  { name: "steelbook", owned: false },
  { name: "criterion", owned: false },
  { name: "shout! factory", owned: false },
];

interface TagModalProps {
  handleClose: () => void;
  movie: Movie;
}

const TagModal = (props: TagModalProps) => {
  const { handleClose, movie } = props;
  const [showTagDetails, setShowTagDetails] = useState(false);
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
                          backgroundColor: item.owned ? "#1F618D" : "#1A5276",
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
                          <View>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    ...TagModalStyles.text,
                                    color: "#85C1E9",
                                    textAlign: "center",
                                    opacity: item.owned ? 1 : 0.5,
                                  }}
                                >
                                  {item.name}
                                </Text>
                                {item.owned && (
                                  <View
                                    style={{
                                      backgroundColor: "#AF7AC5",
                                      paddingHorizontal: 8,
                                      borderRadius: 30,
                                      marginLeft: 10,
                                    }}
                                  >
                                    <Text style={{ fontSize: 18 }}>
                                      {item.types ? item.types.length : 1}
                                    </Text>
                                  </View>
                                )}
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                {item.owned && (
                                  <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={{ marginRight: 10 }}
                                    onPress={() =>
                                      setShowTagDetails(!showTagDetails)
                                    }
                                  >
                                    <Entypo
                                      name="dots-three-horizontal"
                                      size={30}
                                      color="white"
                                    />
                                  </TouchableOpacity>
                                )}
                                <TouchableOpacity
                                  onPress={() => {}}
                                  activeOpacity={0.5}
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Ionicons
                                    name={
                                      item.owned
                                        ? "remove-circle"
                                        : "add-circle"
                                    }
                                    color={item.owned ? "#E74C3C" : "#58D68D"}
                                    size={30}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                            {item.owned &&
                              (showTagDetails && item.types
                                ? item.types?.map((type) => <Text>{type}</Text>)
                                : showTagDetails && (
                                    <Text>
                                      Have multiple {item.name} copies
                                      (standard, deluxe, etc)? List them out
                                      here!
                                    </Text>
                                  ))}
                            {item.owned && showTagDetails && (
                              <TextInput
                                placeholder={`add a new ${item.name} type here...`}
                                style={{
                                  width: "75%",
                                  height: 30,
                                  backgroundColor: "#1A5276",
                                  borderRadius: 10,
                                  paddingLeft: 5,
                                  color: "white",
                                  marginTop: 10,
                                }}
                                editable
                                clearButtonMode="always"
                                returnKeyLabel="done"
                                returnKeyType="done"
                              />
                            )}
                          </View>
                        </TouchableWithoutFeedback>
                      </TouchableOpacity>
                    )}
                    numColumns={1}
                    directionalLockEnabled
                    horizontal={false}
                    style={{ width: deviceWidth, marginBottom: 20 }}
                  />

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
                      <AntDesign
                        name="checkcircle"
                        color="#58D68D"
                        size={40}
                        style={{ opacity: 0.4 }}
                      />
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
