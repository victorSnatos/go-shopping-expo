import { ReactNode } from "react";
import {
  View,
  Text,
  DimensionValue,
  ColorValue,
  FlexAlignType,
} from "react-native";

interface Props {
  flex?: number | undefined;
  paddingHorizontal?: DimensionValue | undefined;
  paddingVertical?: DimensionValue | undefined;
  backgroundColor?: ColorValue | undefined;
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  marginBottom?: DimensionValue | undefined;
  children: ReactNode | ReactNode[];
}

export default function Box({ children, ...props }: Props) {
  return (
    <View
      style={{
        flex: props.flex,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
        backgroundColor: props.backgroundColor,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        marginBottom: props.marginBottom,
      }}
    >
      {children}
    </View>
  );
}
