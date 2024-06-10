export interface Buys {
  name: string;
  amount: number;
  price: number;
}

export interface List {
  id: string;
  name: string;
  category: string;
  createdAt: string;
  shopping: Buys[] | null;
}

export interface ListCreate {
  name: string;
  category: string;
}

export type ListGlobalState = List[];
