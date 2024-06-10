import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { formatDateString } from "../../helpers";
import TextField from "../../ui/TextField";
import { Buys, List } from "../../core/lists/models";
import { useAppNavigation } from "../../hooks";

interface Props {
  buys: Buys;
}

const ShoppingItem = ({ buys }: Props) => {
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
        {buys.name}
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
          X{`${buys.amount}`}
        </TextField>

        <TextField
          fontSize="sm"
          fontWeight="light"
          marginBottom={6}
          color="#2d2d2d"
        >
          ${`${buys.price.toFixed(2)}`}
        </TextField>

        <TextField
          fontSize="sm"
          fontWeight="light"
          marginBottom={6}
          color="#2d2d2d"
        >
          ${`${(buys.price * buys.amount).toFixed(2)}`}
        </TextField>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingItem;
