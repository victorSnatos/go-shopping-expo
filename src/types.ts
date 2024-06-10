import { List } from "./core/lists/models";

export type RootStackParamList = {
  showShoppingLists: undefined;
  shoppingList: { list: List };
  createShoppingList: undefined;
  createPurchase: { list: List };
};
