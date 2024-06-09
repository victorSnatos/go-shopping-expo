import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Constants from "expo-constants";
import ScreenRoot from "../ScreenRoot";
import Box from "../../ui/Box";
import ShoppingListCard from "../../components/ShoppingListCard";
import { useGetAllLists } from "../../core/lists/hooks";
import TextField from "../../ui/TextField";
import { useNavigation } from "@react-navigation/native";
import { useAppNavigation } from "../../hooks";

const ShowShoppingLists = () => {
  const lists = useGetAllLists();
  const navigation = useAppNavigation();

  return (
    <ScreenRoot>
      <Box flex={2} justifyContent="center" paddingHorizontal={20}>
        <TextField fontSize="3xl" fontWeight="bold" color="#2d2d2d">
          Shopping Cart
        </TextField>
      </Box>

      <Box flex={18} paddingHorizontal={20} paddingVertical={15}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {lists.map((item) => (
            <ShoppingListCard key={item.id} list={item} />
          ))}
        </ScrollView>
      </Box>

      <Box
        flex={2}
        justifyContent="center"
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
          onPress={() => navigation.navigate("createShoppingList")}
        >
          <TextField fontSize="md" fontWeight="semiBold" color="#2d2d2d">
            Crear Lista
          </TextField>
        </TouchableOpacity>
      </Box>
    </ScreenRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f0f0f0",
  },
});

export default ShowShoppingLists;
