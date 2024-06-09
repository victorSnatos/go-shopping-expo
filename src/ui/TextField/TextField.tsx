import { View, Text, ColorValue, DimensionValue } from "react-native";

type FontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type FontWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

interface Props {
  fontSize: FontSize;
  children: string | string[];
  color?: ColorValue | undefined;
  fontWeight: FontWeight;
  marginBottom?: DimensionValue | undefined;
}

const fontSizeMap: Record<FontSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
};

const fontWeightMap: Record<FontWeight, string> = {
  thin: "100",
  extraLight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
};

const TextField = ({ children, ...props }: Props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSizeMap[props.fontSize],
          fontWeight: fontWeightMap[props.fontWeight] as never,
          color: props.color,
          marginBottom: props.marginBottom,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default TextField;
