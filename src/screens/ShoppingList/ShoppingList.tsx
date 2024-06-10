import { View, TouchableOpacity, ScrollView } from "react-native";
import { useAppNavigation, useAppRoute } from "../../hooks";
import ScreenRoot from "../ScreenRoot";
import Box from "../../ui/Box";
import TextField from "../../ui/TextField";
import { AntDesign } from "@expo/vector-icons";
import ShoppingItem from "../../components/ShoppingItem";
import { useGetShopping } from "../../core/lists/hooks";
import { Buys } from "../../core/lists/models";

const ShoppingList = () => {
  const navigation = useAppNavigation();
  const route = useAppRoute<"shoppingList">();
  const { list } = route.params;

  const shopping = useGetShopping(list.id);

  const total = (buys: Buys[]): string => {
    const calculate = buys
      .map((item) => item.price * item.amount)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);

    return calculate;
  };

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
          {shopping
            ? shopping.map((item) => (
                <ShoppingItem key={item.name} buys={item} />
              ))
            : ""}
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
              ${shopping ? total(shopping) : "0.00"}
            </TextField>
          </View>
        </View>
      </Box>
    </ScreenRoot>
  );
};

export default ShoppingList;
