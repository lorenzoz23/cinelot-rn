import React, { useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import SegControl from "../../components/SegControl";
import { MonoText as Text } from "../../components/StyledText";
import { styles } from "./styles";

const Search = ({ route, navigation }: { route: any; navigation: any }) => {
  let textInputRef = useRef<TextInput>().current;
  const [showClose, setShowClose] = useState(false);
  const [segState, setSegState] = useState("lot");

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.searchBoxWrapper}>
          <TextInput
            ref={(ref) => {
              textInputRef = ref!;
            }}
            style={{ ...styles.searchBox, width: showClose ? "80%" : "100%" }}
            placeholder="Search your collection, films to add, users..."
            placeholderTextColor="#AEB6BF"
            editable
            autoFocus
            clearButtonMode="while-editing"
            keyboardAppearance="dark"
            autoCapitalize="none"
            onFocus={() => setShowClose(true)}
            onBlur={() => setShowClose(false)}
          />
          {showClose && (
            <TouchableOpacity
              style={styles.cancelWrapper}
              onPress={() => textInputRef?.blur()}
              activeOpacity={0.5}
            >
              <Text style={styles.cancel}>close</Text>
            </TouchableOpacity>
          )}
        </View>
        {showClose && (
          <View style={styles.segContainer}>
            <SegControl
              onChange={setSegState}
              selected={segState}
              search={true}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Search;
