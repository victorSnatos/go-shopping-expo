export interface List {
  id: string;
  name: string;
  category: string;
  createdAt: Date;
}

export type ListGlobalState = List[];
