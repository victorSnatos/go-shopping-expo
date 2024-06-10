import { View, Text } from "react-native";
import React, { useState } from "react";
import ScreenRoot from "../ScreenRoot";
import Box from "../../ui/Box";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useAppNavigation, useAppRoute } from "../../hooks";
import { AntDesign } from "@expo/vector-icons";
import TextField from "../../ui/TextField";
import { Buys } from "../../core/lists/models";
import { useAddBuys } from "../../core/lists/hooks";

const CreatePurchase = () => {
  const navigation = useAppNavigation();
  const route = useAppRoute<"createPurchase">();
  const { list } = route.params;

  const addBuys = useAddBuys();

  const [buys, setBuys] = useState<Buys>({
    name: "",
    amount: 0,
    price: 0,
  });

  const handleOnChangeName = (text: string) => {
    setBuys({
      ...buys,
      name: text,
    });
  };

  const handleOnChangeAmount = (text: string) => {
    setBuys({
      ...buys,
      amount: parseFloat(text),
    });
  };

  const handleOnChangePrice = (text: string) => {
    setBuys({
      ...buys,
      price: parseFloat(text),
    });
  };

  const handleCreateBuys = () => {
    addBuys(list.id, buys);

    navigation.navigate("shoppingList", { list });

    setBuys({
      name: "",
      amount: 0,
      price: 0,
    });

    // navigation.navigate("showShoppingLists");
  };

  return (
    <ScreenRoot>
      <Box justifyContent="center" paddingHorizontal={20}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("shoppingList", { list })}
          >
            <AntDesign name="leftcircle" size={30} color="#2d2d2d" />
          </TouchableOpacity>
          <TextField fontSize="3xl" fontWeight="bold" color="#2d2d2d">
            Agregar Compra
          </TextField>
        </View>
      </Box>

      <Box flex={1} paddingVertical={20}>
        <Box flex={1}>
          <Box marginBottom={15} paddingHorizontal={20}>
            <TextField
              fontSize="md"
              fontWeight="normal"
              marginBottom={5}
              color="#2d2d2d"
            >
              Nombre
            </TextField>

            <TextInput
              value={buys.name}
              style={{
                padding: 10,
                fontSize: 16,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#2d2d2d",
              }}
              onChangeText={handleOnChangeName}
            />
          </Box>

          <Box marginBottom={15} paddingHorizontal={20}>
            <TextField
              fontSize="md"
              fontWeight="normal"
              marginBottom={5}
              color="#2d2d2d"
            >
              Cantidad
            </TextField>

            <TextInput
              value={buys.amount as never}
              style={{
                padding: 10,
                fontSize: 16,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#2d2d2d",
              }}
              inputMode="decimal"
              onChangeText={handleOnChangeAmount}
            />
          </Box>

          <Box marginBottom={15} paddingHorizontal={20}>
            <TextField
              fontSize="md"
              fontWeight="normal"
              marginBottom={5}
              color="#2d2d2d"
            >
              Presio
            </TextField>

            <TextInput
              value={buys.price as never}
              style={{
                padding: 10,
                fontSize: 16,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#2d2d2d",
              }}
              inputMode="decimal"
              onChangeText={handleOnChangePrice}
            />
          </Box>
        </Box>

        <Box
          justifyContent="flex-start"
          alignItems="flex-end"
          paddingHorizontal={20}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2985c0",
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={handleCreateBuys}
          >
            <TextField fontSize="md" fontWeight="semiBold" color="#2d2d2d">
              Crear
            </TextField>
          </TouchableOpacity>
        </Box>
      </Box>
    </ScreenRoot>
  );
};

export default CreatePurchase;
