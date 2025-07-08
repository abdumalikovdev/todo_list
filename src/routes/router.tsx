import { Routes, Route } from "react-router-dom";
import { Tasks } from "@/pages/Tasks/Tasks";
import { MinePage } from "@/pages/mine/mine";
import { DatePage } from "@/pages/date/date";
import { ProPage } from "@/pages/mine/components/pro-page/pro-page";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/mine" element={<MinePage />} />
      <Route path="/pro" element={<ProPage />} />
    </Routes>
  );
};
