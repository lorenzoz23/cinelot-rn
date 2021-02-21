import React from "react";
import {
  KeyboardAvoidingView,
  Modal as NativeModal,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ModalStyles } from "./styles";
import { MonoText as Text } from "../StyledText";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface ModalProps {
  handleClose: () => void;
}

const Modal = (props: ModalProps) => {
  const { handleClose } = props;
  return (
    <View style={ModalStyles.centered}>
      <NativeModal
        animationType="slide"
        transparent={true}
        visible
        onDismiss={handleClose}
      >
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={-20}
          style={ModalStyles.centered}
        >
          <View style={ModalStyles.modal}>
            <Text style={{ ...ModalStyles.text, ...ModalStyles.headerText }}>
              Filters
            </Text>
            <TextInput
              placeholder="Search your 16 lot films..."
              style={ModalStyles.search}
              placeholderTextColor="#AEB6BF"
              keyboardAppearance="dark"
              onChangeText={() => {}}
              multiline={false}
              editable
              autoCapitalize="none"
              clearButtonMode="while-editing"
              returnKeyType="done" //switch to search if there's input
            />
            <View style={ModalStyles.sort}>
              <TouchableOpacity style={ModalStyles.row}>
                <Text
                  style={{
                    ...ModalStyles.text,
                    textAlign: "left",
                    fontSize: 18,
                  }}
                >
                  Sort by...
                </Text>
                <FontAwesome name="sort" color="white" size={25} />
              </TouchableOpacity>
            </View>
            <View style={{ ...ModalStyles.sort, ...ModalStyles.filter }}>
              <TouchableOpacity style={ModalStyles.row}>
                <Text
                  style={{
                    ...ModalStyles.text,
                    textAlign: "left",
                    fontSize: 18,
                  }}
                >
                  Filter by...
                </Text>
                <MaterialIcons name="movie-filter" color="white" size={25} />
              </TouchableOpacity>
            </View>
            <TouchableHighlight
              style={{ ...ModalStyles.button, ...ModalStyles.reset }}
              onPress={() => {}}
              underlayColor="#212F3C"
            >
              <Text style={ModalStyles.text}>Reset all filters</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...ModalStyles.button }}
              onPress={handleClose}
              underlayColor="#EC7063"
            >
              <AntDesign name="closecircle" color="white" size={25} />
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </NativeModal>
    </View>
  );
};

export default Modal;
