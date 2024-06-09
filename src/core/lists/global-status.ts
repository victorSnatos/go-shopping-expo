import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ListGlobalState } from "./models";

const initialState: ListGlobalState = [
  {
    id: "list-1",
    name: "Compra escuela de niños",
    category: "utiles escolares",
    createdAt: new Date(),
  },
  {
    id: "list-2",
    name: "Lista de compras de supermercado",
    category: "alimentos",
    createdAt: new Date(),
  },
  {
    id: "list-3",
    name: "Lista de libros para leer",
    category: "lectura",
    createdAt: new Date(),
  },
  {
    id: "list-4",
    name: "Campin con los muchachos",
    category: "utiles escolares",
    createdAt: new Date(),
  },
  {
    id: "list-5",
    name: "Mercado local user",
    category: "alimentos",
    createdAt: new Date(),
  },
  {
    id: "list-6",
    name: "Libros de lectura",
    category: "lectura",
    createdAt: new Date(),
  },
  {
    id: "list-7",
    name: "Compra escuela de niños",
    category: "utiles escolares",
    createdAt: new Date(),
  },
  {
    id: "list-8",
    name: "Lista de compras de supermercado",
    category: "alimentos",
    createdAt: new Date(),
  },
  {
    id: "list-9",
    name: "Lista de libros para leer",
    category: "lectura",
    createdAt: new Date(),
  },
];

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
});

export const actions = listSlice.actions;

export default listSlice.reducer;
