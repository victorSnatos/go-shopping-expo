import { View, TouchableOpacity, ScrollView } from "react-native";
import { useAppNavigation, useAppRoute } from "../../hooks";
import ScreenRoot from "../ScreenRoot";
import Box from "../../ui/Box";
import TextField from "../../ui/TextField";
import { AntDesign } from "@expo/vector-icons";
import ShoppingItem from "../../components/ShoppingItem";

const ShoppingList = () => {
  const navigation = useAppNavigation();
  const route = useAppRoute<"shoppingList">();
  const { list } = route.params;

  return (
    <ScreenRoot>
      <Box justifyContent="center" paddingHorizontal={20} marginBottom={15}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("showShoppingLists")}
          >
            <AntDesign name="leftcircle" size={30} color="#2d2d2d" />
          </TouchableOpacity>
          <TextField fontSize="3xl" fontWeight="bold" color="#2d2d2d">
            Compras
          </TextField>
        </View>
        <TextField fontSize="lg" fontWeight="bold" color="#2d2d2d">
          {list.name}
        </TextField>
      </Box>

      <Box flex={18} paddingHorizontal={20}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
        </ScrollView>
      </Box>

      <Box flex={2} paddingHorizontal={20}>
        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: "#2985c0",
          }}
        >
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
              Total
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
        </View>
      </Box>
    </ScreenRoot>
  );
};

export default ShoppingList;
