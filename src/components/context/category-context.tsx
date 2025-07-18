import { createContext, useState, type ReactNode } from "react";
import { HEADER_TABS as initialHeaderTabs } from "@/constants";
import type { Category, CategoryContextType } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [headerTabs, setHeaderTabs] = useState<Category[]>(initialHeaderTabs);

  return (
    <CategoryContext.Provider value={{ headerTabs, setHeaderTabs }}>
      {children}
    </CategoryContext.Provider>
  );
};
