import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_TABS } from "@/constants";
import { HEADER_TABS as initialHeaderTabs } from "@/constants";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa";
import { CreateCategoryModal } from "./create-category/CreateCategoryModal";

interface DrawerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const DrawerSidebar: FC<DrawerSidebarProps> = ({
  isOpen,
  onClose,
  activePage,
  setActivePage,
}) => {
  const navigate = useNavigate();
  const [headerTabs, setHeaderTabs] = useState(initialHeaderTabs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (path: string, title: string) => {
    setActivePage(title);
    navigate(path);
    onClose();
  };

  const handleAddCategory = (newTitle: string) => {
    const newCategory = {
      id: headerTabs.length + 1,
      title: newTitle,
      path: `/${newTitle.toLowerCase()}`,
      count: 0,
    };
    setHeaderTabs([...headerTabs, newCategory]);
  };

  return (
    <>
      <CreateCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCategory}
      />

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-blue-500 text-white p-4">
          <h2 className="text-xl font-bold">To-Do List</h2>
        </div>

        <div className="py-2">
          {SIDEBAR_TABS.map((item) => {
            if (item.title === "Category") {
              return (
                <Accordion type="single" collapsible key={item.id}>
                  <AccordionItem value="category">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3 px-4 ">
                        <div className="text-blue-400">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-1">
                      {headerTabs.map((header) => (
                        <button
                          key={header.id}
                          onClick={() =>
                            handleNavigate(header.path, header.title)
                          }
                          className={`w-full text-left px-6 py-2 flex items-center justify-between hover:bg-gray-100 rounded ${
                            activePage === header.title
                          }`}
                        >
                          <span>{header.title}</span>
                          {header.count !== undefined && (
                            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                              {header.count}
                            </span>
                          )}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            if (item.title === "Create New") {
              return (
                <button
                  key={item.id}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
                >
                  <FaPlus />
                  {item.title}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.path, item.title)}
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
              >
                {item.icon}
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
