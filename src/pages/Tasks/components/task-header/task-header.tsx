import { HEADER_TABS } from "@/constants";
import type { FC } from "react";

interface TasksHeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const TasksHeader: FC<TasksHeaderProps> = ({
  activePage,
  setActivePage,
}) => {
  return (
    <div className="bg-white shadow px-4 py-3">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {HEADER_TABS.map((page) => (
          <button
            key={page.title}
            onClick={() => setActivePage(page.title)}
            className={`flex-shrink-0 px-4 py-1 rounded-full text-sm whitespace-nowrap ${
              activePage === page.title
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>
    </div>
  );
};
