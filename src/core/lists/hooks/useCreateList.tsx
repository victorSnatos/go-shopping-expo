import { randomUUID } from "expo-crypto";
import { useAppDispatch } from "../../../hooks";
import { List, ListCreate } from "../models";
import { actions } from "../global-status";

export default function useCreateList() {
  const dispatch = useAppDispatch();

  return (list: ListCreate) => {
    const newList: List = {
      id: randomUUID(),
      name: list.name,
      category: list.category,
      createdAt: new Date().toISOString(),
      shopping: null,
    };

    dispatch(actions.addList(newList));
  };
}
