import React from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { DeleteModalStyles } from "./styles";
import { MonoText as Text } from "../../StyledText";
import { AntDesign } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";
import { sharedModalStyles } from "../styles";

interface DeleteModalProps {
  handleClose: () => void;
  movie: Movie;
  isLot: boolean;
}

const DeleteModal = (props: DeleteModalProps) => {
  const { handleClose, movie, isLot } = props;
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
            style={sharedModalStyles.flex}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={DeleteModalStyles.container}>
              <TouchableWithoutFeedback>
                <View style={DeleteModalStyles.modal}>
                  <Text style={DeleteModalStyles.headerText}>
                    Remove {movie.name} from your {isLot ? "Lot" : "Wishlist"}?
                  </Text>
                  <TouchableOpacity style={DeleteModalStyles.button}>
                    <Text style={DeleteModalStyles.removeFilmText}>
                      Remove film
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
                    <AntDesign name="closecircle" color="white" size={25} />
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </BlurView>
      </NativeModal>
    </View>
  );
};

export default DeleteModal;
