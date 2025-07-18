import { createContext } from "react";
import type { CategoryContextType } from "./types";

export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);
