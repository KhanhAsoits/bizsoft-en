import {Platform} from "react-native";

export const PaddingTranslator = (padding) => {
    return Platform.OS === "ios" ? padding / 2 : padding;
}