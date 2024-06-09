import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { formatDateString } from "../../helpers";
import TextField from "../../ui/TextField";
import { List } from "../../core/lists/models";
import { useAppNavigation } from "../../hooks";

interface Props {}

const ShoppingItem = ({}: Props) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderBottomColor: "#2d2d2d50",
        borderBottomWidth: 1,
      }}
    >
      <TextField
        fontSize="md"
        fontWeight="normal"
        marginBottom={5}
        color="#2d2d2d"
      >
        Atun don sancho 250G com mas productos de la lista
      </TextField>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          fontSize="sm"
          fontWeight="light"
          marginBottom={6}
          color="#2d2d2d"
        >
          X3
        </TextField>

        <TextField
          fontSize="sm"
          fontWeight="light"
          marginBottom={6}
          color="#2d2d2d"
        >
          $1.59
        </TextField>

        <TextField
          fontSize="sm"
          fontWeight="light"
          marginBottom={6}
          color="#2d2d2d"
        >
          $3.19
        </TextField>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingItem;
