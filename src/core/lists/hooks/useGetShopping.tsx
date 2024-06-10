import { useAppSelector } from "../../../hooks";
import { Buys } from "../models";

export default function useGetShopping(listId: string): Buys[] | null {
  const lists = useAppSelector((state) => state.lists);

  const list = lists.find((item) => item.id === listId);

  if (list === undefined) {
    return null;
  }

  return list.shopping;
}
