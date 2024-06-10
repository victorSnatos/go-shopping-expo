import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import ShowShoppingLists from "./screens/ShowShoppingLists";
import CreateShoppingList from "./screens/CreateShoppingList";
import ShoppingList from "./screens/ShoppingList";
import CreatePurchase from "./screens/CreatePurchase";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="showShoppingLists"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="showShoppingLists"
              component={ShowShoppingLists}
            />
            <Stack.Screen
              name="createShoppingList"
              component={CreateShoppingList}
            />
            <Stack.Screen name="shoppingList" component={ShoppingList} />
            <Stack.Screen name="createPurchase" component={CreatePurchase} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
