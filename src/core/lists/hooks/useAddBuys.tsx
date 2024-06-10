import { useAppDispatch } from "../../../hooks";
import { actions } from "../global-status";
import { Buys } from "../models";

export default function useAddBuys() {
  const dispatch = useAppDispatch();

  return (listId: string, buys: Buys) => {
    dispatch(actions.addBuys({ id: listId, buys }));
  };
}
