import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { FC } from "react";
import { FaFlag } from "react-icons/fa";
import clsx from "clsx";
import { FLAG_ITEMS } from "./flag-items";

interface TaskFlagModalProps {
  disabled: boolean;
}

export const TaskFlagModal: FC<TaskFlagModalProps> = ({ disabled }) => {
  if (disabled) {
    return (
      <button disabled className="text-gray-300 cursor-not-allowed">
        <FaFlag />
      </button>
    );
  }

  const flags = FLAG_ITEMS.filter((item) => item.type === "flag");
  const numbers = FLAG_ITEMS.filter((item) => item.type === "number");
  const moods = FLAG_ITEMS.filter((item) => item.type === "mood");
  const progresses = FLAG_ITEMS.filter((item) => item.type === "progress");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-gray-400 hover:text-gray-600">
          <FaFlag />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-4 space-y-4">
        <p className="text-xr">Mark with symbol</p>

        <div>
          <h4 className="text-xs text-gray-500 mb-2">Flag</h4>
          <div className="grid grid-cols-5 gap-3 text-center">
            {flags.map((item) => (
              <button
                key={item.id}
                className={clsx(
                  "hover:opacity-80 transition text-xl flex flex-col items-center justify-center",
                  `text-${item.color}-500`
                )}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 mb-2">Number</h4>
          <div className="grid grid-cols-5 gap-3 text-center">
            {numbers.map((item) => (
              <button
                key={item.id}
                className={clsx(
                  "bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold",
                  `text-${item.color}-500`
                )}
              >
                {item.value}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs text-gray-500 mb-2">Progress</h4>
          <div className="grid grid-cols-5 gap-3 text-center">
            {progresses.map((item) => (
              <button
                key={item.id}
                className="text-xl hover:scale-110 transition"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs text-gray-500 mb-2">Mood</h4>
          <div className="grid grid-cols-5 gap-3 text-center">
            {moods.map((item) => (
              <button
                key={item.id}
                className="text-xl hover:scale-110 transition"
              >
                {item.value}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
