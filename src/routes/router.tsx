import { Routes, Route } from "react-router-dom";
import { Tasks } from "@/pages/Tasks/Tasks";
import { MinePage } from "@/pages/mine/mine";
import { DatePage } from "@/pages/date/date";
import { ProPage } from "@/pages/mine/components/pro-page/pro-page";
import { FaqPage } from "@/pages/mine/components/faq/faq-page";
import { SpecialOfferPage } from "@/pages/special-offer/special-offer";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/mine" element={<MinePage />} />
      <Route path="/pro" element={<ProPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/special-offer" element={<SpecialOfferPage />} />
    </Routes>
  );
};
