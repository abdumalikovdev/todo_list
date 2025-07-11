import { type FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react"; // ✅ Loader2 spinner import

export const SpecialOfferPage: FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 soat sekundda

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 relative">
      <button
        className="absolute top-4 right-4 text-gray-400 text-2xl"
        onClick={() => navigate(-1)}
      >
        &times;
      </button>

      <h1 className="text-2xl font-bold mt-4">Loyal User</h1>
      <h1 className="text-2xl font-bold">Special Offer</h1>

      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-600 font-bold">Up To</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-pink-500">40%</p>
            <p className="text-pink-500 font-bold ml-1">OFF</p>
          </div>

          <p className="mt-2 text-gray-600">Limited time</p>
          <p className="text-red-500 font-bold text-xl">
            {formatTime(timeLeft)}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468360.png"
            alt="Gift"
            className="w-28"
          />
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-500 mb-2 mt-4">
        UNLOCK ALL PRO FEATURES
      </p>

      <div className="flex gap-4 mb-4">
        <div className="relative border-[3px] border-pink-400 rounded-xl p-4 flex-1">
          <div className="absolute -top-3 left-3 bg-pink-400 text-white text-xs px-3 py-1 rounded-full shadow">
            Recommend
          </div>
          <p className="text-pink-400 font-bold text-lg mb-4">Permanent</p>
          <div className="flex justify-center items-center">
            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
          </div>
          <div className="absolute bottom-0 right-0 bg-pink-400 rounded-tl-xl rounded-br-xl p-1">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl p-4 flex-1">
          <p className="font-bold text-gray-800 text-lg mb-4">Annual</p>
          <div className="flex justify-center items-center">
            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />{" "}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4">
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <p>Cancel at any time</p>
          <button onClick={() => navigate("/restore")}>RESTORE</button>
        </div>

        <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-semibold text-lg flex justify-center items-center gap-2">
          CONTINUE
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          After the free trial period ends or the purchase is confirmed, payment
          will be charged...
        </p>
      </div>
    </div>
  );
};
