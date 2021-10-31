import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../types/ParamLists";
import { styles } from "./styles";
import { MonoText as Text } from "../../components/Text";

const NotFoundScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist!</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
        activeOpacity={0.5}
      >
        <Text style={styles.linkText}>Go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
