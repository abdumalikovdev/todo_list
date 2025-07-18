import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const pureColors = ["#86b7fe", "#f28fb1", "#4ab3a6", "#2c2b2c"];
const proPureColors = ["#d96761", "#f4cd4a", "#28a97b", "#f19749", "#9063f4"];
const textures = ["blue", "red", "purple", "green"];
const sceneries = [
  "dog",
  "telescope",
  "astronaut",
  "clouds",
  "sunflower",
  "moon",
];

export const ThemePage = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const navigate = useNavigate();
  const isProUser = false;

  return (
    <ScrollArea className="h-screen w-full p-2">
      <div className="flex items-center w-full p-2 mb-4 gap-2">
        <button onClick={() => navigate("/tasks")}>
          <IoMdArrowBack size={24} />{" "}
        </button>
        <h1 className="text-2xl font-semibold">Theme</h1>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium">Pure Color</h3>
        <div className="w-full flex gap-5 mt-2">
          {pureColors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "w-14 h-14 rounded-3xl flex items-center justify-center border-2",
                selectedColor === color
                  ? "border-blue-500"
                  : "border-transparent"
              )}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <CheckCircle2 className="text-white w-5 h-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium flex items-center gap-1">
          Pure Color (PRO){" "}
          <div className="text-yellow-400">
            <FaCrown size={20} />
          </div>
        </h3>
        <div className="w-full flex gap-4 mt-2 bg-gray-100 px-2 py-3 rounded-xl">
          {proPureColors.map((color) => (
            <div
              key={color}
              onClick={() => {
                if (isProUser) setSelectedColor(color);
              }}
              className="w-14 h-14 rounded-3xl flex items-center justify-center border-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium flex items-center gap-1">
          Texture{" "}
          <div className="text-yellow-400">
            <FaCrown size={20} />
          </div>
        </h3>
        <div className="flex gap-4 mt-2">
          {textures.map((texture) => (
            <div
              key={texture}
              className="w-16 h-16 bg-gray-200 rounded-md relative flex items-center justify-center"
            >
              <div
                className={cn(
                  "w-4 h-4 rounded-full",
                  texture === "blue"
                    ? "bg-blue-500"
                    : texture === "red"
                    ? "bg-red-500"
                    : texture === "purple"
                    ? "bg-purple-500"
                    : "bg-green-500"
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium flex items-center gap-1">
          Scenery
          <div className="text-yellow-400">
            <FaCrown size={20} />
          </div>
        </h3>
        <div className="w-full grid grid-cols-2 gap-4 mt-2">
          {sceneries.map((name) => (
            <Card
              key={name}
              className="h-24 bg-gray-300 rounded-xl shadow-inner flex items-center justify-center"
            >
              <span className="text-sm capitalize text-gray-700">{name}</span>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};
