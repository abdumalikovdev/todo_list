import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import type { FC } from "react";

const pieData = [
  { name: "No Category", value: 14 },
  { name: "Work", value: 1 },
];

const pieColors = ["#4F46E5", "#A5B4FC"];

export const MinePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-4 flex items-center gap-4 border-b">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div>
          <p className="text-gray-800 font-semibold">
            Kept to your plan for 3 days!
          </p>
          <p className="text-blue-500 text-sm cursor-pointer">Click to login</p>
        </div>
      </div>

      {/* Upgrade to PRO */}
      <div className="bg-blue-100 mx-4 mt-4 rounded-lg p-4 flex justify-between items-center">
        <div>
          <p className="text-blue-800 font-semibold">Upgrade to PRO</p>
          <p className="text-blue-600 text-sm">Unlock all PRO features</p>
        </div>
        <button
          onClick={() => navigate("/pro")}
          className="bg-white rounded-full px-3 py-1 text-blue-600 font-semibold shadow"
        >
          <FaCrown color="inline mr-1 text-yellow-400" />
          PRO
        </button>
      </div>

      {/* Tasks Overview */}
      <div className="px-4 pt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold">6</p>
          <p className="text-gray-600 text-sm">Completed Tasks</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold">15</p>
          <p className="text-gray-600 text-sm">Pending Tasks</p>
        </div>
      </div>

      {/* Completion of Daily Tasks */}
      <div className="px-4 mt-4">
        <p className="text-gray-600 font-semibold mb-2">
          Completion of Daily Tasks
        </p>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
            <span>7/6-7/12</span>
            <span>▼</span>
          </div>

          {/* Bar chart imitation */}
          <div className="h-40 flex items-end justify-between">
            {["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"].map(
              (day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-4 bg-blue-400 rounded-t"
                    style={{ height: index === 1 ? "60px" : "0px" }}
                  ></div>
                  <p className="text-xs mt-1">{day}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Tasks in Next 7 Days */}
      <div className="px-4 mt-4">
        <p className="text-gray-600 font-semibold mb-2">Tasks in Next 7 Days</p>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-500 text-sm">No tasks upcoming.</p>
        </div>
      </div>

      {/* Pending Tasks in Categories */}
      <div className="px-4 mt-4 mb-20">
        <p className="text-gray-600 font-semibold mb-2">
          Pending Tasks in Categories
        </p>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
            <span>In 30 days</span>
            <span>▼</span>
          </div>

          <div className="flex items-center justify-center">
            <ResponsiveContainer width="50%" height={150}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={40}
                  outerRadius={50}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="ml-4 space-y-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: pieColors[index % pieColors.length],
                    }}
                  />
                  <p className="text-gray-600 text-sm">
                    {item.name}{" "}
                    <span className="font-semibold">{item.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Upgrade Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaCrown color="text-yellow-400" />
          <p className="text-gray-700 text-sm">Upgrade to PRO</p>
        </div>
        <button
          onClick={() => navigate("/pro")}
          className="text-gray-500 text-sm"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
