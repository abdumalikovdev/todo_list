import { GoStarFill } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { FaBroom } from "react-icons/fa6";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdOutlineApps } from "react-icons/md";
import { SiFeedly } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const SIDEBAR_TABS = [
  {
    id: 1,
    icon: "",
    title: "Middle-Year Sale",
    path: "/sale",
  },
  {
    id: 2,
    icon: <GoStarFill />,
    title: "Starred Tasks",
    path: "/work",
  },
  {
    id: 3,
    icon: <BiSolidCategory />,
    title: "Category",
    path: "/category",
  },
  {
    id: 4,
    icon: <FaBroom />,
    title: "Theme",
    path: "/theme",
  },
  {
    id: 5,
    icon: <BsFillMenuButtonWideFill />,
    title: "Widget",
    path: "/widget",
  },
  {
    id: 6,
    icon: <FaHeart />,
    title: "Donate",
    path: "/donate",
  },
  {
    id: 7,
    icon: <MdOutlineApps />,
    title: "Family Apps",
    path: "/family",
  },
  {
    id: 8,
    icon: <SiFeedly />,
    title: "Feedback",
    path: "/feedback",
  },
  {
    id: 9,
    icon: <FaQuestionCircle />,
    title: "FAQ",
    path: "/faq",
  },
  {
    id: 10,
    icon: <IoMdSettings />,
    title: "Settings",
    path: "/settings",
  },
];

import { FaPlus } from "react-icons/fa";

export const HEADER_TABS = [
  {
    id: 1,
    title: "All",
    path: "/all",
    count: 9,
  },
  {
    id: 2,
    title: "Work",
    path: "/work",
    count: 1,
  },
  {
    id: 3,
    title: "Personal",
    path: "/personal",
    count: 1,
  },
  {
    id: 4,
    title: "Wishlist",
    path: "/wishlist",
    count: 0,
  },
  {
    id: 5,
    title: "Birthday",
    path: "/birthday",
    count: 0,
  },
  {
    id: 6,
    title: "Create New",
    icon: <FaPlus />,
    path: "/create",
  },
];
