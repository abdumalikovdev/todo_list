import type { JSX } from "react";

export interface Category {
  id: number;
  title: string;
  path: string;
  count?: number;
  icon?: JSX.Element;
}

export interface CategoryContextType {
  headerTabs: Category[];
  setHeaderTabs: React.Dispatch<React.SetStateAction<Category[]>>;
}
