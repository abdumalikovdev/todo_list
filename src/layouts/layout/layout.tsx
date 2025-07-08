import { useNavigate } from "react-router-dom";
import { DrawerSidebar } from "@/components/common/drawer/DrawerSidebar";
import { BOTTOM_TABS } from "@/constants";
import { useState, type FC, type ReactNode } from "react";
interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/tasks");
  const handleTabClick = (item: { id: number; path: string }) => {
    if (item.id === 1) {
      setIsDrawerOpen(true);
    } else {
      setActiveTab(item.path);
      navigate(item.path);
    }
  };
  return (
    <div className="min-h-screen  flex flex-col">
      <main className="flex-grow">{children}</main>
      <nav className="fixed bottom-0 w-full border-t shadow drop-shadow-slate-800 flex justify-around items-center px-5 bg-white">
        {BOTTOM_TABS.map((item) => {
          const isActive = activeTab === item.path;
          return (
            <button
              type="button"
              onClick={() => handleTabClick(item)}
              key={item.id}
              className="flex flex-col gap-y-1 cursor-pointer py-3 items-center text-center focus:outline-none relative"
            >
              <div
                className={`${isActive ? "text-blue-500" : "text-gray-500"}`}
              >
                {item.icon}
              </div>
              <p
                className={`text-xs mt-1 text-center ${
                  isActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.title}
              </p>
            </button>
          );
        })}
      </nav>
      <DrawerSidebar
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activePage={"All"}
        setActivePage={() => {}}
      />
    </div>
  );
};
