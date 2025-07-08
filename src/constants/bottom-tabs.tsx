import { FaCalendarCheck, FaUserLarge } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";

export const BOTTOM_TABS = [
  {
    id: 1,
    title: "",
    icon: <IoMenu size={30} />,
    path: "",
  },
  {
    id: 2,
    title: "Tasks",
    icon: <FaTasks size={25} />,
    path: "/tasks",
  },
  {
    id: 3,
    title: "Date",
    icon: <FaCalendarCheck size={25} />,
    path: "/date",
  },
  {
    id: 4,
    title: "Mine",
    icon: <FaUserLarge size={25} />,
    path: "/mine",
  },
];
