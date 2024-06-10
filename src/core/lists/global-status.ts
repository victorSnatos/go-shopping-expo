import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Buys, List, ListGlobalState } from "./models";

const initialState: ListGlobalState = [
  {
    id: "list-1",
    name: "Compra semanal",
    category: "Alimentos",
    createdAt: new Date().toISOString(),
    shopping: [
      {
        name: "Atun don sancho",
        amount: 2,
        price: 1.59,
      },
      {
        name: "Sardina campos",
        amount: 3,
        price: 0.85,
      },
      {
        name: "Aceite joya sol",
        amount: 1,
        price: 1.49,
      },
    ],
  },
];

interface Shopping {
  id: string;
  buys: Buys;
}

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.unshift(action.payload);
    },
    addBuys: (state, action: PayloadAction<Shopping>) => {
      const list = state.find((item) => item.id === action.payload.id);

      if (list) {
        if (list.shopping) {
          list.shopping.unshift(action.payload.buys);
        } else {
          list.shopping = [action.payload.buys];
        }
      }
    },
  },
});

export const actions = listSlice.actions;

export default listSlice.reducer;
