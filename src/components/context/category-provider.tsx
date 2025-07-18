import { useState, type ReactNode } from "react";
import type { CategoryContextType } from "./types";
import { CategoryContext } from "./category-context";

interface Props {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: Props) => {
  const [category, setCategory] = useState("All");

  const value: CategoryContextType = {
    category,
    setCategory,
    headerTabs: [], // initial qiymat
    setHeaderTabs: () => {},
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
