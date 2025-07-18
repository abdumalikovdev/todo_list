import { useContext } from "react";
import type { CategoryContextType } from "./types";
import { CategoryContext } from "./category-context";

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
