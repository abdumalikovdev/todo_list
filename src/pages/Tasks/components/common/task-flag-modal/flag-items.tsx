import { FaFlag } from "react-icons/fa";
import {
  MdOutlineAccessTime,
  MdAccessTimeFilled,
  MdOutlineWatchLater,
  MdOutlineSchedule,
  MdTimer,
} from "react-icons/md";
import type { JSX } from "react";

export interface FlagItem {
  id: number;
  type: "flag" | "number" | "mood" | "progress";
  color?: string;
  icon?: JSX.Element;
  value?: number | string;
}

export const FLAG_ITEMS: FlagItem[] = [
  { id: 1, type: "flag", color: "red", icon: <FaFlag /> },
  { id: 2, type: "flag", color: "orange", icon: <FaFlag /> },
  { id: 3, type: "flag", color: "purple", icon: <FaFlag /> },
  { id: 4, type: "flag", color: "blue", icon: <FaFlag /> },
  { id: 5, type: "flag", color: "green", icon: <FaFlag /> },

  { id: 6, type: "number", color: "red", value: 1 },
  { id: 7, type: "number", color: "orange", value: 2 },
  { id: 8, type: "number", color: "purple", value: 3 },
  { id: 9, type: "number", color: "blue", value: 4 },
  { id: 10, type: "number", color: "green", value: 5 },

  { id: 11, type: "mood", value: "😊" },
  { id: 12, type: "mood", value: "😐" },
  { id: 13, type: "mood", value: "😢" },
  { id: 14, type: "mood", value: "😍" },
  { id: 15, type: "mood", value: "😁" },

  { id: 16, type: "progress", icon: <MdOutlineAccessTime /> },
  { id: 17, type: "progress", icon: <MdAccessTimeFilled /> },
  { id: 18, type: "progress", icon: <MdOutlineWatchLater /> },
  { id: 19, type: "progress", icon: <MdOutlineSchedule /> },
  { id: 20, type: "progress", icon: <MdTimer /> },
];
