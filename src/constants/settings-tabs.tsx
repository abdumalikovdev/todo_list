import type { ReactNode } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaBroom } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";

export interface SettingTab {
  id: number;
  icon?: ReactNode;
  title: string;
  path: string;
}

export const SETTINGS_TABS: SettingTab[] = [
  {
    id: 1,
    icon: <FaUserLarge size={22} />,
    title: "Accaunt Sync",
    path: "/accaunt-sync",
  },
  {
    id: 2,
    icon: <BsFillMenuButtonWideFill size={22} />,
    title: "Widget",
    path: "/widget",
  },
  {
    id: 3,
    icon: <IoMdNotifications size={22} />,
    title: "Notification & Reminder",
    path: "/nodification-reminder",
  },
  {
    id: 5,
    icon: <FaBroom size={22} />,
    title: "Theme",
    path: "/theme",
  },

  {
    id: 6,
    icon: <IoCalendarOutline size={22} />,
    title: "Think Calendar Event",
    path: "/think-calendar-event",
  },
  {
    id: 7,
    icon: <IoMdMusicalNotes size={22} />,
    title: "Task Completion Tone",
    path: "/task-completion-tone",
  },
  {
    id: 8,
    icon: <BsFillCalendar2WeekFill size={22} />,
    title: "First Day of Week",
    path: "/first-day-of-week",
  },
  {
    id: 9,
    icon: <IoTime size={22} />,
    title: "Time Format",
    path: "/time-format",
  },
  {
    id: 10,
    icon: <BsFillCalendar2DateFill size={22} />,
    title: "Date Format",
    path: "/date-format",
  },
  {
    id: 11,
    icon: <FaCalendarDays size={22} />,
    title: "Due Date",
    path: "/due-date",
  },
  {
    id: 12,
    icon: <FaBroom size={22} />,
    title: "Task Reminded Default",
    path: "/task-reminded-default",
  },
  {
    id: 13,
    icon: <FaBroom size={22} />,
    title: "Time Range Sort",
    path: "/time-range-sort",
  },
  {
    id: 14,
    icon: <FaBroom size={22} />,
    title: "Language",
    path: "/language",
  },
  {
    id: 15,
    icon: <FaBroom size={22} />,
    title: "Help Us Translate",
    path: "/help-us-translate",
  },

  {
    id: 17,
    icon: <FaBroom size={22} />,
    title: "Rate Us",
    path: "/rate-us",
  },
  {
    id: 18,
    icon: <FaBroom size={22} />,
    title: "Share Upp",
    path: "/share-upp",
  },
  {
    id: 19,
    icon: <FaBroom size={22} />,
    title: "Feedback",
    path: "/feedback",
  },

  {
    id: 20,
    icon: <FaBroom size={22} />,
    title: "Privacy Policy",
    path: "/privacy-policy",
  },

  {
    id: 21,
    icon: <FaBroom size={22} />,
    title: "Version",
    path: "/version",
  },
];
