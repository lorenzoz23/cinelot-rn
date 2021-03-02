import React from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { MoreModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";

interface MoreModalProps {
  handleClose: () => void;
  movie: Movie;
}

const MoreModal = (props: MoreModalProps) => {
  const { handleClose, movie } = props;
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
          style={{ width: "100%", flex: 1, justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={MoreModalStyles.container}>
              <TouchableWithoutFeedback>
                <View style={MoreModalStyles.modal}>
                  <View style={{ alignItems: "center", marginVertical: 20 }}>
                    <View style={{ marginVertical: 20, alignItems: "center" }}>
                      <Image
                        source={{
                          uri: movie.poster,
                        }}
                        style={{
                          width: 150,
                          height: 225,
                          borderRadius: 10,
                          borderColor: "#CACFD2",
                          borderWidth: 1,
                        }}
                      />
                      <Text
                        style={{
                          ...MoreModalStyles.text,
                          ...MoreModalStyles.headerText,
                        }}
                      >
                        {movie.name}
                      </Text>
                      <Text
                        style={{
                          ...MoreModalStyles.text,
                        }}
                      >
                        {movie.year}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      {Array(5)
                        .fill(0)
                        .map((index, i) => (
                          <TouchableOpacity>
                            <AntDesign
                              name="star"
                              size={40}
                              color="white"
                              style={{ padding: 5 }}
                            />
                          </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity
                      style={{ marginVertical: 20, alignItems: "center" }}
                    >
                      <FontAwesome name="eye-slash" size={60} color="white" />
                      <Text
                        style={{
                          ...MoreModalStyles.text,
                          fontSize: 20,
                        }}
                      >
                        Watch
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
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

export default MoreModal;
