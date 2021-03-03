import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal as NativeModal,
} from "react-native";
import { FilterModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface FilterModalProps {
  handleClose: () => void;
}

const FilterModal = (props: FilterModalProps) => {
  const { handleClose } = props;
  return (
    <View>
      <NativeModal
        animationType="fade"
        transparent={true}
        presentationStyle="overFullScreen"
        onRequestClose={handleClose}
        visible
        onDismiss={handleClose}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={handleClose}
        >
          <KeyboardAvoidingView
            //behavior="padding"
            keyboardVerticalOffset={-20}
            style={FilterModalStyles.container}
          >
            <TouchableWithoutFeedback>
              <View style={FilterModalStyles.modal}>
                <Text
                  style={{
                    ...FilterModalStyles.text,
                    ...FilterModalStyles.headerText,
                  }}
                >
                  Filters
                </Text>
                <TextInput
                  placeholder="Search your 16 lot films..."
                  style={FilterModalStyles.search}
                  placeholderTextColor="#AEB6BF"
                  keyboardAppearance="dark"
                  onChangeText={() => {}}
                  multiline={false}
                  editable
                  autoCapitalize="none"
                  clearButtonMode="while-editing"
                  returnKeyType="done" //switch to search if there's input
                />
                <View style={FilterModalStyles.sort}>
                  <TouchableOpacity style={FilterModalStyles.row}>
                    <Text
                      style={{
                        ...FilterModalStyles.text,
                        textAlign: "left",
                        fontSize: 18,
                      }}
                    >
                      Sort by...
                    </Text>
                    <FontAwesome name="sort" color="white" size={25} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...FilterModalStyles.sort,
                    ...FilterModalStyles.filter,
                  }}
                >
                  <TouchableOpacity style={FilterModalStyles.row}>
                    <Text
                      style={{
                        ...FilterModalStyles.text,
                        textAlign: "left",
                        fontSize: 18,
                      }}
                    >
                      Filter by...
                    </Text>
                    <MaterialIcons
                      name="movie-filter"
                      color="white"
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableHighlight
                  style={{
                    ...FilterModalStyles.button,
                    ...FilterModalStyles.reset,
                  }}
                  onPress={() => {}}
                  underlayColor="#212F3C"
                >
                  <Text style={FilterModalStyles.text}>Reset all filters</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...FilterModalStyles.button }}
                  onPress={handleClose}
                  underlayColor="#EC7063"
                >
                  <AntDesign name="closecircle" color="white" size={25} />
                </TouchableHighlight>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};

export default FilterModal;
