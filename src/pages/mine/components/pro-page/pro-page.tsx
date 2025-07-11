import { FaCheckCircle } from "react-icons/fa";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiStarFullOutline } from "react-icons/ti";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { MdRestore } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { AiTwotoneLike } from "react-icons/ai";
import { Loader2 } from "lucide-react";

export const ProPage: FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 top-10">
        <div className="flex justify-between items-center w-full left-0 top-0 fixed bg-white p-2">
          <button
            className="text-gray-400 text-2xl"
            onClick={() => navigate("/mine")}
          >
            &times;
          </button>
          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <PiDotsThreeOutlineVerticalFill size={18} color="gray" />
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
              >
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    navigate("/restore");
                    setIsMenuOpen(false);
                  }}
                >
                  <MdRestore color="gray" size={23} /> Restore Purchase
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    navigate("/faq");
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">
                    ?
                  </div>
                  FAQ
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center gap-2"
                  onClick={() => {
                    navigate("/feedback");
                    setIsMenuOpen(false);
                  }}
                >
                  <RiFeedbackLine color="gray" size={20} /> Send Feedback
                </button>
              </div>
            )}
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mt-14">Upgrade to PRO</h1>
        <p className="text-gray-500 text-center mb-4">
          Unlock all PRO features
        </p>

        <div className="space-y-3 mt-4 mb-6">
          {[
            "Unlimited checklist",
            "Repetitive task customization",
            "Powerful enhanced reminders",
            "Advanced widget styles",
            "40+ exquisite themes",
            "Remove Ads",
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <FaCheckCircle color="blue" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Monthly */}
          <div className="relative bg-white rounded-lg p-3 text-center shadow border">
            <p className="text-gray-700 font-semibold">Monthly</p>
            <div className="mt-2 flex justify-center">
              <div className="flex justify-center items-center">
                <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">Billed monthly</p>
          </div>

          {/* Permanent */}
          <div className="relative bg-yellow-50 flex justify-center rounded-lg p-3 text-center shadow border border-red-400">
            <div className="absolute top-[-11px] bg-red-500 text-white text-xs px-[14px] py-[4px] rounded-xl">
              Recommend
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Permanent</p>
              <div className="mt-2 flex justify-center">
                <div className="flex justify-center items-center">
                  <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                </div>
              </div>
              <p className="text-red-500 text-xs mt-2">Billed one-time</p>
            </div>
          </div>

          {/* Annual */}
          <div className="relative flex justify-center bg-white rounded-lg p-3 text-center shadow border">
            <div className="absolute top-[-11px] bg-orange-300 text-white text-xs px-[28px] py-[4px] rounded-xl">
              Popular
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Annual</p>
              <div className="mt-2 flex justify-center">
                <div className="flex justify-center items-center">
                  <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2">Billed yearly</p>
            </div>
          </div>
        </div>
        <h1 className="font-bold mb-2">User Feedback</h1>
        <div className="w-full bg-white rounded-lg p-4 shadow-lg flex flex-col gap-2 ">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-gray-600">--Miche ***</p>
            </div>
            <div className="flex text-yellow-400">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
          </div>
          <h2 className="font-semibold mt-1">I totally recommend this</h2>
          <p className="text-gray-500">
            This is such an amazing application, you can customize it! I totally
            recommend this!
          </p>
        </div>

        <div className="my-6 ">
          <h2 className="text-lg font-bold text-center mb-4">
            More about To-do List
          </h2>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <GiPodiumWinner size={40} color="#fbbf24" />

              <p className="font-semibold">Winner</p>
              <p className="text-xs text-gray-500">Users' Choices</p>
            </div>
            <div className="flex flex-col items-center">
              <AiTwotoneLike size={40} color="#fbbf24" />
              <p className="font-semibold">20 Million+</p>
              <p className="text-xs text-gray-500">Users' Choices</p>
            </div>
          </div>
        </div>

        <div className="my-6 w-full ">
          <h2 className="text-lg font-bold mb-2">All Features</h2>
          <div className="overflow-hidden rounded-lg shadow border">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-300 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Feature</th>
                  <th className="px-4 py-2 text-center">Free</th>
                  <th className="px-4 py-2 text-center">PRO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 bg-blue-400">Checklists</td>
                  <td className="px-4 py-2 text-center text-gray-500">
                    Limited
                  </td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    Unlimited
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 bg-blue-400">Reminders</td>
                  <td className="px-4 py-2 text-center text-gray-500">
                    Limited
                  </td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    Enhanced
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 bg-blue-400">Recurring Tasks</td>
                  <td className="px-4 py-2 text-center text-gray-500">
                    Limited
                  </td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    Enhanced
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 bg-blue-400">Advanced widget</td>
                  <td className="px-4 py-2 text-center text-gray-500">2</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    60+
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 bg-blue-400">Advanced widget</td>
                  <td className="px-4 py-2 text-center text-gray-500">4</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    40+
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 bg-blue-400">Exquisite Thems</td>
                  <td className="px-4 py-2 text-center text-gray-500">✖️</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    ✔️
                  </td>
                </tr>
                <tr className="bg-blue-50 ">
                  <td className="px-4 py-2 bg-blue-400">Advanced widget</td>
                  <td className="px-4 py-2 text-center text-gray-500">✖️</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    ✔️
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 bg-blue-400">Advanced widget</td>
                  <td className="px-4 py-2 text-center text-gray-500">✖️</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    ✔️
                  </td>
                </tr>
                <tr className="bg-blue-50 ">
                  <td className="px-4 py-2 bg-blue-400">Advanced widget</td>
                  <td className="px-4 py-2 text-center text-blue-500">✖️</td>
                  <td className="px-4 py-2 text-center text-blue-600 font-semibold">
                    ✔️
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-[150px]">
          {/* Monthly */}
          <div className="relative bg-white rounded-lg p-3 text-center shadow border">
            <p className="text-gray-700 font-semibold">Monthly</p>
            <div className="mt-2 flex justify-center">
              <svg
                className="w-8 h-8 text-blue-400 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                ></path>
              </svg>
            </div>
            <p className="text-gray-400 text-xs mt-2">Billed monthly</p>
          </div>

          {/* Permanent */}
          <div className="relative bg-yellow-50 flex justify-center rounded-lg p-3 text-center shadow border border-red-400">
            <div className="absolute top-[-11px] bg-red-500 text-white text-xs px-[14px] py-[4px] rounded-xl">
              Recommend
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Permanent</p>
              <div className="mt-2 flex justify-center">
                <svg
                  className="w-8 h-8 text-blue-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                  ></path>
                </svg>
              </div>
              <p className="text-red-500 text-xs mt-2">Billed one-time</p>
            </div>
          </div>

          {/* Annual */}
          <div className="relative flex justify-center bg-white rounded-lg p-3 text-center shadow border">
            <div className="absolute top-[-11px] bg-orange-300 text-white text-xs px-[28px] py-[4px] rounded-xl">
              Popular
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Annual</p>
              <div className="mt-2 flex justify-center">
                <svg
                  className="w-8 h-8 text-blue-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-400 text-xs mt-2">Billed yearly</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 w-full left-0 bg-white p-4">
          <button className="w-full mt-6 bg-gradient-to-r flex items-center justify-center gap-2 from-cyan-400 to-blue-500 text-white py-3 rounded-full font-semibold text-lg">
            CONTINUE
            <MdKeyboardDoubleArrowRight />
          </button>
          <p className="text-xs text-gray-400 text-center mt-4 px-2">
            TERMS | PRIVACY POLICY | RESTORE
          </p>
          <p className="text-xs text-gray-400 mt-2 px-2 text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
      </div>
    </div>
  );
};
