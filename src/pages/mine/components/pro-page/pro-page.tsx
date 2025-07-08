import { FaCheckCircle } from "react-icons/fa";
import type { FC } from "react";

export const ProPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      {/* Close button */}
      <div className="flex justify-end">
        <button className="text-gray-400 text-2xl">&times;</button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mt-2">Upgrade to PRO</h1>
      <p className="text-gray-500 text-center mb-4">Unlock all PRO features</p>

      {/* Illustration placeholder */}
      <div className="flex justify-center mb-4">
        <div className="w-40 h-32 bg-gray-200 rounded-md" />
      </div>

      {/* Feature list */}
      <div className="space-y-3 mb-6">
        {[
          "Unlimited checklist",
          "Repetitive task customization",
          "Powerful enhanced reminders",
          "Advanced widget styles",
          "40+ exquisite themes",
          "Remove Ads",
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="text-blue-500">
              <FaCheckCircle />
            </div>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>

      {/* Subscription options */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {/* Monthly */}
        <div className="bg-white rounded-lg p-3 text-center shadow border">
          <p className="text-gray-700 font-semibold">Monthly</p>
          <div className="mt-2 w-8 h-8 mx-auto rounded-full border-2 border-blue-400" />
          <p className="text-gray-400 text-xs mt-2">Billed monthly</p>
        </div>

        {/* Permanent */}
        <div className="bg-yellow-50 rounded-lg p-3 text-center shadow border border-red-400">
          <p className="text-gray-700 font-semibold">Permanent</p>
          <div className="mt-2 w-8 h-8 mx-auto rounded-full border-2 border-blue-400" />
          <p className="text-red-500 text-xs mt-2">Billed one-time</p>
        </div>

        {/* Annual */}
        <div className="bg-white rounded-lg p-3 text-center shadow border">
          <p className="text-gray-700 font-semibold">Annual</p>
          <div className="mt-2 w-8 h-8 mx-auto rounded-full border-2 border-blue-400" />
          <p className="text-gray-400 text-xs mt-2">Billed yearly</p>
        </div>
      </div>

      {/* Continue button */}
      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-full font-semibold text-lg">
        CONTINUE
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-400 text-center mt-4 px-2">
        TERMS | PRIVACY POLICY | RESTORE
      </p>
      <p className="text-xs text-gray-400 text-center mt-2 px-2">
        After the free trial period ends or the purchase is confirmed, payment
        will be charged...
      </p>
    </div>
  );
};
