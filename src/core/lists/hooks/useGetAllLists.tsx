import { useAppSelector } from "../../../hooks";

export default function useGetAllLists() {
  const lists = useAppSelector((state) => state.lists);

  return lists;
}
