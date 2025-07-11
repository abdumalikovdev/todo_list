import { GoStarFill } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { FaBroom } from "react-icons/fa6";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaCrown, FaHeart } from "react-icons/fa";
import { MdOutlineApps } from "react-icons/md";
import { SiFeedly } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const SIDEBAR_TABS = [
  {
    id: 1,
    icon: (
      <div className="text-yellow-400">
        <FaCrown size={22} />
      </div>
    ),
    title: "Special Offer",
    path: "/special-offer",
  },
  {
    id: 2,
    icon: (
      <div className="text-blue-400">
        <GoStarFill size={22} />
      </div>
    ),
    title: "Starred Tasks",
    path: "/starred",
  },
  {
    id: 3,
    icon: (
      <div className="text-blue-400">
        <BiSolidCategory size={22} />
      </div>
    ),
    title: "Category",
    path: "/category",
  },
  {
    id: 4,
    icon: (
      <div className="text-blue-400">
        <FaBroom size={22} />
      </div>
    ),
    title: "Theme",
    path: "/theme",
  },
  {
    id: 5,
    icon: (
      <div className="text-blue-400">
        <BsFillMenuButtonWideFill size={22} />
      </div>
    ),
    title: "Widget",
    path: "/widget",
  },
  {
    id: 6,
    icon: (
      <div className="text-blue-400">
        <FaHeart size={22} />
      </div>
    ),
    title: "Donate",
    path: "/donate",
  },
  {
    id: 7,
    icon: (
      <div className="text-blue-400">
        <MdOutlineApps size={22} />
      </div>
    ),
    title: "Family Apps",
    path: "/family",
  },
  {
    id: 8,
    icon: (
      <div className="text-blue-400">
        <SiFeedly size={22} />
      </div>
    ),
    title: "Feedback",
    path: "/feedback",
  },
  {
    id: 9,
    icon: (
      <div className="text-blue-400">
        <FaQuestionCircle size={22} />
      </div>
    ),
    title: "FAQ",
    path: "/faq",
  },
  {
    id: 10,
    icon: (
      <div className="text-blue-400">
        <IoMdSettings size={22} />
      </div>
    ),
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
