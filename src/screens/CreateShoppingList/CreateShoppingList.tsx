import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import ScreenRoot from "../ScreenRoot";
import Box from "../../ui/Box";
import TextField from "../../ui/TextField";
import { AntDesign } from "@expo/vector-icons";
import { useAppNavigation } from "../../hooks";
import { ListCreate } from "../../core/lists/models";
import { useCreateList } from "../../core/lists/hooks";

const CreateShoppingList = () => {
  const navigation = useAppNavigation();
  const createList = useCreateList();

  const [list, setList] = useState<ListCreate>({
    name: "",
    category: "",
  });

  const handleOnChangeName = (text: string) => {
    setList({
      ...list,
      name: text,
    });
  };
  const handleOnChangeCategory = (text: string) => {
    setList({
      ...list,
      category: text,
    });
  };

  const handleCreateList = () => {
    createList(list);

    setList({
      name: "",
      category: "",
    });

    navigation.navigate("showShoppingLists");
  };

  return (
    <ScreenRoot>
      <Box justifyContent="center" paddingHorizontal={20}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("showShoppingLists")}
          >
            <AntDesign name="leftcircle" size={30} color="#2d2d2d" />
          </TouchableOpacity>
          <TextField fontSize="3xl" fontWeight="bold" color="#2d2d2d">
            Crear tarea
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
              Categoria
            </TextField>

            <TextInput
              style={{
                padding: 10,
                fontSize: 16,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#2d2d2d",
              }}
              onChangeText={handleOnChangeCategory}
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
            onPress={handleCreateList}
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

export default CreateShoppingList;
