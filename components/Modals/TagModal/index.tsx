import React, { useState } from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { TagModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";
import { sharedModalStyles } from "../styles";

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

  return (
    <View>
      <NativeModal
        animationType="fade"
        transparent={true}
        visible
        onDismiss={handleClose}
      >
        <BlurView intensity={100} style={sharedModalStyles.blurContainer}>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={sharedModalStyles.container}>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    ...sharedModalStyles.modal,
                    ...TagModalStyles.contentContainer,
                  }}
                >
                  <View style={TagModalStyles.headerContainer}>
                    <Text
                      style={{
                        ...sharedModalStyles.text,
                        ...sharedModalStyles.headerText,
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
                          ...TagModalStyles.tagContainer,
                          backgroundColor: item.owned ? "#1F618D" : "#1A5276",
                        }}
                        key={index}
                      >
                        <TouchableWithoutFeedback>
                          <View>
                            <View style={TagModalStyles.innerTagContainer}>
                              <View style={sharedModalStyles.row}>
                                <Text
                                  style={{
                                    ...sharedModalStyles.text,
                                    ...TagModalStyles.tagNameText,
                                    opacity: item.owned ? 1 : 0.5,
                                  }}
                                >
                                  {item.name}
                                </Text>
                                {item.owned && (
                                  <View style={TagModalStyles.ownershipNumber}>
                                    <Text style={{ fontSize: 18 }}>
                                      {item.types ? item.types.length : 1}
                                    </Text>
                                  </View>
                                )}
                              </View>
                              <View style={sharedModalStyles.row}>
                                {item.owned && (
                                  <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={TagModalStyles.moreButtonWrapper}
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
                                  onPress={() => {
                                    if (item.owned) {
                                      Alert.alert(
                                        "Danger zone!",
                                        `Are you sure you want to remove the ${item.name} tag?`,
                                        [
                                          {
                                            text: "Remove it",
                                            style: "destructive",
                                          },
                                          {
                                            text: "Keep it",
                                            style: "default",
                                          },
                                        ],
                                        { cancelable: false }
                                      );
                                    }
                                  }}
                                  activeOpacity={0.5}
                                  style={sharedModalStyles.row}
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
                                placeholder={`Add a new ${item.name} type here...`}
                                style={TagModalStyles.textInput}
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
                    style={TagModalStyles.flatListContainer}
                  />
                  <View style={TagModalStyles.bottomButtonContainer}>
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
