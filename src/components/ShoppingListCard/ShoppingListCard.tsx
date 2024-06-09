import React from "react";
import { View, Text } from "react-native";
import { formatDateString } from "../../helpers";
import TextField from "../../ui/TextField";

interface List {
  id: string;
  name: string;
  category: string;
  createdAt: Date;
}

interface Props {
  list: List;
}

const ShoppingListCard = ({ list }: Props) => {
  return (
    <View
      style={{
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
      }}
    >
      <TextField
        fontSize="md"
        fontWeight="semiBold"
        marginBottom={3}
        color="#2d2d2d"
      >
        {list.name}
      </TextField>

      <TextField
        fontSize="sm"
        fontWeight="light"
        marginBottom={6}
        color="#2d2d2d"
      >
        Creada el {formatDateString(list.createdAt)}
      </TextField>

      <View
        style={{
          maxWidth: 105,
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          borderRadius: 10,
          backgroundColor: "#2985c0",
        }}
      >
        <TextField fontSize="xs" fontWeight="light" color="#2d2d2d">
          {list.category}
        </TextField>
      </View>
    </View>
  );
};

export default ShoppingListCard;
