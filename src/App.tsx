import { Provider } from "react-redux";
import { store } from "./store";
import ShoppingList from "./screens/ShoppingList";

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingList />
    </Provider>
  );
}
