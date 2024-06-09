import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { List, ListGlobalState } from "./models";

const initialState: ListGlobalState = [
  {
    id: "list-1",
    name: "Compra Quincena uno",
    category: "Alimentos",
    createdAt: new Date().toISOString(),
  },
  {
    id: "list-2",
    name: "Compra Quincena dos",
    category: "Alimentos",
    createdAt: new Date().toISOString(),
  },
];

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.unshift(action.payload);
    },
  },
});

export const actions = listSlice.actions;

export default listSlice.reducer;
