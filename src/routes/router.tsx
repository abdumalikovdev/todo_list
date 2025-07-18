import { Routes, Route } from "react-router-dom";
import { Tasks } from "@/pages/Tasks/Tasks";
import { MinePage } from "@/pages/mine/mine";
import { DatePage } from "@/pages/date/date";
import { ProPage } from "@/pages/mine/components/pro-page/pro-page";
import { FaqPage } from "@/pages/mine/components/faq/faq-page";
import { SpecialOfferPage } from "@/pages/special-offer/special-offer";
import { StarredTasks } from "@/pages/starred-tasks/starred-tasks";
import { ThemePage } from "@/pages/themes/themes-page";
import { SettingsPage } from "@/pages/settings/settings";
import { TaskDetailsPage } from "@/pages/Tasks/components/common/task-details/task-details";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/mine" element={<MinePage />} />
      <Route path="/pro" element={<ProPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/special-offer" element={<SpecialOfferPage />} />
      <Route path="/starred-tasks" element={<StarredTasks />} />
      <Route path="/theme" element={<ThemePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/tasks/:id" element={<TaskDetailsPage />} />
    </Routes>
  );
};
