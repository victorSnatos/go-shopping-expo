export interface List {
  id: string;
  name: string;
  category: string;
  createdAt: string;
}

export interface ListCreate {
  name: string;
  category: string;
}

export type ListGlobalState = List[];
