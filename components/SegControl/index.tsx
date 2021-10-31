import React from "react";
import { SegmentedControl, Segment } from "react-native-resegmented-control";
import { SegControlStyles } from "./styles";

interface SegControlProps {
  onChange: (name: string) => void;
  selected: string;
  search?: boolean;
}

export const SegControl = ({ onChange, selected, search }: SegControlProps) => {
  if (!search) {
    return (
      <SegmentedControl
        activeTintColor="#3498DB"
        inactiveTintColor="white"
        initialSelectedName={selected}
        onChangeValue={onChange}
        style={SegControlStyles.container}
      >
        <Segment name="lot" content="Your Lot" />
        <Segment name="wishlist" content="Your Wishlist" />
      </SegmentedControl>
    );
  }
  return (
    <SegmentedControl
      activeTintColor="#3498DB"
      inactiveTintColor="white"
      initialSelectedName={selected}
      onChangeValue={onChange}
      style={SegControlStyles.container}
    >
      <Segment name="collection" content="Your collection" />
      <Segment name="films" content="Films to add" />
      <Segment name="users" content="Users" />
    </SegmentedControl>
  );
};
