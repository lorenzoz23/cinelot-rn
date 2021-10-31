import React from "react";
import { Text } from "react-native";

export const MonoText = (props: Text["props"]) => {
  return (
    <Text style={[props.style, { fontFamily: "space-mono" }]} {...props} />
  );
};
